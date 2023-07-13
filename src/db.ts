import { v4 as uuid } from "uuid";
import { z } from "zod";
import { breedSchema, breeds } from "./types";
import { DogsRecord, getXataClient } from "./xata";
const xata = getXataClient();

export interface Dog
  extends Pick<DogsRecord, "image" | "id" | "age" | "name" | "breed"> {
  breed: keyof typeof breeds;
}

const dogImageApiSchema = z.object({
  message: z.string().url(),
  status: z.literal("success"),
});

export async function getAllDogs(): Promise<Dog[]> {
  return (await xata.db.dogs.getMany()).map(
    ({ xata: _metadata, ...dog }) =>
      ({ ...dog, breed: breedSchema.parse(dog.breed) }) as Dog,
  );
}

export async function getDog(id: Dog["id"]): Promise<Dog | null> {
  const record = await xata.db.dogs.read(id);
  if (!record) return null;
  const { xata: _metadata, ...dog } = record;
  return { ...dog, breed: breedSchema.parse(dog.breed) };
}

export async function addDog(dog: Omit<Dog, "id" | "image">): Promise<void> {
  await xata.db.dogs.create({
    ...dog,
    image: await getImage(dog.breed),
    id: uuid(),
  });
}

export async function removeDog(dogId: Dog["id"]): Promise<boolean> {
  await xata.db.dogs.delete(dogId);
  return true;
}

export async function updateDog(dog: Dog): Promise<boolean> {
  await xata.db.dogs.update(dog);
  return true;
}

async function getImage(breed: Dog["breed"]) {
  if (!breed) return "";
  const json = await (
    await fetch(`https://dog.ceo/api/breed/${breeds[breed]}/images/random`)
  ).json();
  const { message: image } = dogImageApiSchema.parse(json);
  return image;
}
