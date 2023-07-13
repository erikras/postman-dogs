import { promises as fs } from "fs";
import path from "path";
import { v4 as uuid } from "uuid";
import { z } from "zod";
import { Database, Dog, breeds, databaseSchema } from "./types";

const dogImageApiSchema = z.object({
  message: z.string().url(),
  status: z.literal("success"),
});

export async function getAllDogs(): Promise<Database> {
  return databaseSchema.parse(
    JSON.parse(
      await fs.readFile(path.join(process.cwd(), "database.json"), "utf8"),
    ),
  );
}

async function writeAllDogs(database: Database): Promise<void> {
  await fs.writeFile(
    path.join(process.cwd(), "database.json"),
    JSON.stringify(database, undefined, 2),
  );
}

export async function getDog(id: Dog["id"]): Promise<Dog | undefined> {
  return (await getAllDogs()).find((dog) => dog.id === id);
}

export async function addDog(dog: Omit<Dog, "id" | "image">): Promise<void> {
  const database = await getAllDogs();
  database.push({
    ...dog,
    image: await getImage(dog.breed),
    id: uuid(),
  });
  await writeAllDogs(database);
}

export async function removeDog(dog: Dog["id"]): Promise<boolean> {
  const database = await getAllDogs();
  const index = database.findIndex((d) => d.id === dog);
  if (index === -1) return false;
  database.splice(index, 1);
  await writeAllDogs(database);
  return true;
}

export async function updateDog(dog: Dog): Promise<boolean> {
  const database = await getAllDogs();
  const index = database.findIndex((d) => d.id === dog.id);
  if (index === -1) return false;
  const existingDog = database[index];
  if (existingDog.breed !== dog.breed) {
    dog.image = await getImage(dog.breed);
  }
  database[index] = dog;
  await writeAllDogs(database);
  return true;
}

async function getImage(breed: Dog["breed"]) {
  const json = await (
    await fetch(`https://dog.ceo/api/breed/${breeds[breed]}/images/random`)
  ).json();
  const { message: image } = dogImageApiSchema.parse(json);
  return image;
}
