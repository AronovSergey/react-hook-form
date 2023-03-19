import React from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";

let renderCount = 0;

const ApplyValidation = () => {
  const { register, handleSubmit } = useForm();

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="React Hook Form makes form validation easy by aligning with the existing HTML standard for form validation."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ApplyValidation;
