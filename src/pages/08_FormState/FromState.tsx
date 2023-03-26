import React, { useMemo } from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";

let renderCount = 0;

const FormState = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isDirty,
      dirtyFields,
      touchedFields,
      isSubmitted,
      isSubmitting,
      isSubmitSuccessful,
      submitCount,
    },
  } = useForm({
    defaultValues: {
      userName: "",
      firstName: "",
      lastName: "",
    },
  });

  renderCount++;

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  };

  const errorsObj = useMemo(
    () => ({
      userName: errors.userName?.message,
      firstName: errors.firstName?.message,
      lastName: errors.lastName?.message,
    }),
    [errors]
  );

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="This object contains information about the entire form state. It helps you to keep on track with the user's interaction with your form application."
        note="There is more forState object, but I only show the most important ones."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("userName")} placeholder="User Name" />
        <input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
        />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>

      <div>{JSON.stringify({ errorsObj })}</div>
      <div>{JSON.stringify({ isDirty })}</div>
      <div>{JSON.stringify({ dirtyFields })}</div>
      <div>{JSON.stringify({ touchedFields })}</div>
      <div>{JSON.stringify({ isSubmitted })}</div>
      <div>{JSON.stringify({ isSubmitting })}</div>
      <div>{JSON.stringify({ isSubmitSuccessful })}</div>
      <div>{JSON.stringify({ submitCount })}</div>
    </div>
  );
};
export default FormState;
