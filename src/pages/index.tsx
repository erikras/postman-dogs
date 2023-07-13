/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { getAllDogs } from "../db";
import { Dog } from "../types";
import styles from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Index({ dogs: loadedDogs }: { dogs: Dog[] }) {
  const [dogs, setDogs] = useState<Dog[]>(loadedDogs);
  const remove = useCallback(async (id: Dog["id"]) => {
    await fetch(`/api/dogs/${id}`, {
      method: "DELETE",
    });
    setDogs((prev) => prev.filter((dog) => dog.id !== id));
  }, []);
  const router = useRouter();
  return (
    <main className={styles.main}>
      <Link href="/create">Create Dog</Link>
      <table>
        <thead>
          <tr>
            <th className={styles.image} />
            <th>Name</th>
            <th className={styles.age}>Age</th>
            <th>Breed</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {dogs.map((dog) => (
            <tr key={dog.id} onClick={() => router.push(`/${dog.id}`)}>
              <td className={styles.image}>
                <a
                  href={dog.image}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  <img src={dog.image} alt={dog.breed} />
                </a>
              </td>
              <td>{dog.name}</td>
              <td className={styles.age}>{dog.age}</td>
              <td>{dog.breed}</td>
              <td className={styles.removeColumn}>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    remove(dog.id);
                  }}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<{
  dogs: Dog[];
}> = async () => {
  const dogs = await getAllDogs();
  return {
    props: {
      dogs,
    },
  };
};
