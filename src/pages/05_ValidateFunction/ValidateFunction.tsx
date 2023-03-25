import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header.component";

let renderCount = 0;

interface FormValues {
  userName: string;
  password: string;
}

const ValidateFunction = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  const userNameRegister = register("userName", {
    required: { value: true, message: "user name is required" },
    minLength: { value: 2, message: "user name is too short" },
    validate: (value) => value === "admin" || "You are not an admin",
  });

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="Validate - 	
        You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. This function will be executed on its own without depending on other validation rules"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...userNameRegister} placeholder="User Name" />
        <p>{errors.userName?.message}</p>
        <input {...register("password")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ValidateFunction;
