import React from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

let renderCount = 0;

interface FormValues {
  firstName: string;
  lastName: string;
}

const Trigger = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>();

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="Trigger validation manually. This is useful when you want to validate a field without user interaction. For example, you can trigger validation when the form is submitted."
        note="trigger will return a promise with the validation result. If you want to trigger validation on multiple fields, you can pass an array of field names."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            required: { value: true, message: "first name name is required" },
            minLength: { value: 4, message: "first name is too short" },
          })}
          placeholder="First Name"
        />
        <p>{errors.firstName?.message}</p>
        <input {...register("lastName")} placeholder="Last Name" />
        <Button
          onClick={() => {
            trigger("firstName", { shouldFocus: true });
          }}
        >
          Trigger First Name
        </Button>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Trigger;
