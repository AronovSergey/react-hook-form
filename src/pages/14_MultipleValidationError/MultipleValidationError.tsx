import React from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

let renderCount = 0;

interface FormValues {
  firstName: string;
  lastName: string;
}

const MultipleValidationError = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    criteriaMode: "all",
  });

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="To set multiple validation errors, you can use setError with the types property."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <p>{errors.firstName?.types?.test}</p>
        <p>{errors.firstName?.types?.required}</p>
        <Button
          onClick={() => {
            setError(
              "firstName",
              {
                types: {
                  required: "This is required.",
                  test: "This is a test error.",
                },
              },
              { shouldFocus: true }
            );
          }}
        >
          Set Error
        </Button>
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};
export default MultipleValidationError;
