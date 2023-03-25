import React from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";

let renderCount = 0;

const ApplyValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  console.log(errors);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="React Hook Form makes form validation easy by aligning with the existing HTML standard for form validation."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", { required: "This is required" })}
          placeholder="First Name"
        />
        <p>{errors.firstName?.message}</p>
        <input
          {...register("lastName", {
            required: "This is required",
            minLength: { value: 4, message: "Min length is 4" },
          })}
          placeholder="Last Name"
        />
        <p>{errors.lastName?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};
export default ApplyValidation;
