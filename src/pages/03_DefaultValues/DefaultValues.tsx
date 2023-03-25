import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header.component";

let renderCount = 0;

interface FormValues {
  firstName: string;
  lastName: string;
}

const DefaultValues = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      firstName: "Bill",
      lastName: "Luo",
    },
  });

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="Default values for the form."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default DefaultValues;
