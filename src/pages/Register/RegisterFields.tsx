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
        description="This method allows you to register an input or select element and apply validation rules to React Hook Form"
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
