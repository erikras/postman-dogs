import type { NextApiRequest, NextApiResponse } from "next";
import { addDog, getAllDogs } from "../../../db";
import { dogToCreateSchema } from "../../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(await getHandler(req, res));
    case "POST":
      return res.status(200).json(await postHandler(req, res));
    default:
      return res.status(405).end(); // Method Not Allowed
  }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  return await getAllDogs();
}

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const dog = dogToCreateSchema.parse(JSON.parse(req.body));
  return await addDog(dog);
}
