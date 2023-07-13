import { Field, Form } from "react-final-form";
import { breeds } from "../types";
import styles from "./DogForm.module.css";
import { Dog } from "../db";

export type DogWithOptionalId = Omit<Dog, "id"> & { id?: string };

const validate = (values: Partial<DogWithOptionalId>) => {
  const errors: Partial<Record<keyof DogWithOptionalId, string>> = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.age) {
    errors.age = "Required";
  }
  if (!values.breed) {
    errors.breed = "Required";
  }
  return errors;
};

export default function DogForm({
  values,
  onSubmit,
  submitText,
}: {
  values: DogWithOptionalId;
  onSubmit: (dog: DogWithOptionalId) => void;
  submitText: string;
}) {
  return (
    <Form onSubmit={onSubmit} validate={validate} initialValues={values}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Field name="name">
            {({ input, meta }) => (
              <div>
                <label>Name</label>
                <input {...input} type="text" placeholder="Name" autoFocus />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="age">
            {({ input, meta }) => (
              <div>
                <label>Age</label>
                <input {...input} type="number" placeholder="Age" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="breed">
            {({ input, meta }) => (
              <div>
                <label>Breed</label>
                <select {...input}>
                  <option value=""></option>
                  {Object.keys(breeds).map((breed) => (
                    <option value={breed} key={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit">{submitText}</button>
        </form>
      )}
    </Form>
  );
}
