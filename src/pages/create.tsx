import { useRouter } from "next/router";
import { useCallback } from "react";
import DogForm, { DogWithOptionalId } from "../components/DogForm";
import { Dog } from "../types";
import styles from "./index.module.css";

const EMPTY: DogWithOptionalId = {
  name: "",
  image: "",
  age: 0,
  breed: "Mix",
};

export default function Create({ dogs }: { dogs: Dog[] }) {
  const router = useRouter();
  const handleSubmit = useCallback(
    async (dog: DogWithOptionalId) => {
      const response = await fetch("/api/dogs", {
        method: "POST",
        body: JSON.stringify({ ...dog, age: Number(dog.age) }),
      });
      router.push("/");
    },
    [router],
  );
  return (
    <main className={styles.main}>
      <DogForm values={EMPTY} onSubmit={handleSubmit} submitText="Create Dog" />
    </main>
  );
}
