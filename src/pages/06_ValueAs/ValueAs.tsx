import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header.component";

let renderCount = 0;

const ValueAs = () => {
  const { register, handleSubmit } = useForm();

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="Returns a Number normally. If something goes wrong NaN will be returned."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          {...register("age", { valueAsNumber: true })}
          placeholder="Age"
        />
        <input
          type="date"
          {...register("birthday", { valueAsDate: true })}
          placeholder="Birthday"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ValueAs;
