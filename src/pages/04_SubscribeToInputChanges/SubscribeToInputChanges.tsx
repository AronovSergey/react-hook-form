import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header.component";

let renderCount = 0;

const SubscribeToInputChanges = () => {
  const { register, handleSubmit, watch } = useForm();

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  const firstName = watch("firstName");

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="watch - This method will watch specified inputs and return their values. It is useful to render input value and for determining what to render by condition."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <p>{firstName}</p>
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SubscribeToInputChanges;
