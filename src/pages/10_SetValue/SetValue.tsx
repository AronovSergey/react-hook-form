import React from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

let renderCount = 0;

const SetValue = () => {
  const { register, handleSubmit, setValue } = useForm();

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="This function allows you to dynamically set the value of a registered field and have the options to validate and update the form state. At the same time, it tries to avoid unnecessary rerender."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />

        <Button
          onClick={() => {
            setValue("firstName", "Bill");
          }}
        >
          setValue
        </Button>
        <input type="submit" />
      </form>
    </div>
  );
};
export default SetValue;
