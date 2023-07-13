import { v4 as uuid } from "uuid";
import { z } from "zod";
import { breeds } from "./types";
import { DogsRecord, getXataClient } from "./xata";
const xata = getXataClient();

export type Dog = Omit<DogsRecord, "xata">;

const dogImageApiSchema = z.object({
  message: z.string().url(),
  status: z.literal("success"),
});

export async function getAllDogs(): Promise<Dog[]> {
  return (await xata.db.dogs.getMany()).map(
    ({ xata: _metadata, ...dog }) => dog,
  );
}

export async function getDog(id: Dog["id"]): Promise<Dog | null> {
  const record = await xata.db.dogs.read(id);
  if (!record) return null;
  const { xata: _metadata, ...dog } = record;
  return dog;
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
