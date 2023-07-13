import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getDog, removeDog, updateDog } from "../../../db";
import { dogSchema } from "../../../types";

const querySchema = z.object({ id: z.string().uuid() });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(await getHandler(req, res));
    case "PUT":
      return res.status(200).json(await putHandler(req, res));
    case "DELETE":
      return res.status(200).json(await deleteHandler(req, res));
    default:
      return res.status(405).end(); // Method Not Allowed
  }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = querySchema.parse(req.query);
  return await getDog(id);
}

async function putHandler(req: NextApiRequest, res: NextApiResponse) {
  const dog = dogSchema.parse(JSON.parse(req.body));
  return await updateDog(dog);
}

async function deleteHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = querySchema.parse(req.query);
  return await removeDog(id);
}
