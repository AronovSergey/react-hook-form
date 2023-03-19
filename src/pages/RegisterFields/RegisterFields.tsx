import React from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";

let renderCount = 0;

const RegisterFields = () => {
  const { register, handleSubmit } = useForm();

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="One of the key concepts in React Hook Form is to register your component into the hook. This will make its value available for both the form validation and submission."
        note="Each field is required to have a name as a key for the registration process."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterFields;
