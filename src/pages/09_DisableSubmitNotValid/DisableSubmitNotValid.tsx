import React from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";

let renderCount = 0;

const DisableSubmitNotValid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { firstName: "", lastName: "" },
  });

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="To disable the submit button when the form is not valid, you can use the isValid property from the formState object."
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
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};
export default DisableSubmitNotValid;
