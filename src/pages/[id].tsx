import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { z } from "zod";
import DogForm, { DogWithOptionalId } from "../components/DogForm";
import { getDog, Dog } from "../db";
import styles from "./index.module.css";
import { DogsRecord } from "../xata";

const inter = Inter({ subsets: ["latin"] });

export default function Index({ dog }: { dog: Dog }) {
  const router = useRouter();
  const handleSubmit = useCallback(
    async (dog: DogWithOptionalId) => {
      const response = await fetch(`/api/dogs/${dog.id}`, {
        method: "PUT",
        body: JSON.stringify({ ...dog, age: Number(dog.age) }),
      });
      router.push("/");
    },
    [router],
  );
  return (
    <main className={styles.main}>
      <DogForm values={dog} onSubmit={handleSubmit} submitText="Update Dog" />
    </main>
  );
}

const paramsSchema = z.object({
  id: z.string().uuid(),
});

export const getServerSideProps: GetServerSideProps<{
  dog: Dog;
}> = async ({ params, res }) => {
  const { id } = paramsSchema.parse(params);
  const dog = await getDog(id);
  if (!dog) {
    res.statusCode = 404;
    throw new Error("Dog not found");
  }
  return { props: { dog } };
};
