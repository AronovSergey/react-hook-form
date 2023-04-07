import React from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

let renderCount = 0;

interface FormValues {
  firstName: string;
  lastName: string;
}

const Reset = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="Reset the entire form state, fields reference, and subscriptions."
        note="This function is changing the form default values, which will trigger a re-render."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />

        <Button
          onClick={() => {
            reset({
              firstName: "Bill",
              lastName: "Luo",
            });
          }}
        >
          Reset
        </Button>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Reset;
