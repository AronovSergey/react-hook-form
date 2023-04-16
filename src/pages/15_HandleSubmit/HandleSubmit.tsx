import React from "react";
import Header from "../../components/Header/Header.component";
import { FieldErrors, useForm } from "react-hook-form";

let renderCount = 0;

interface FromValues {
  firstName: string;
  lastName: string;
}

const HandleSubmit = () => {
  const { register, handleSubmit } = useForm<FromValues>();

  renderCount++;

  const onSubmit = (data: FromValues) => console.log({ data });

  const onError = (errors: FieldErrors<FromValues>) => console.log({ errors });

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="handleSubmit is a function that will run validation and submit the form."
        note="handleSubmit can receive two callback function, one for success and one for error."
      />

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          {...register("firstName", {
            required: { value: true, message: "First Name is Required " },
          })}
          placeholder="First Name"
        />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};
export default HandleSubmit;
