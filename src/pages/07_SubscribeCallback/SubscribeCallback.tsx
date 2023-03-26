import React, { useEffect } from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";

let renderCount = 0;

const SubscribeCallback = () => {
  const { register, handleSubmit, watch } = useForm();

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    const subscription = watch((data) => console.log(data));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="With Callback version of watch, you can subscribe to the form state and get notified when the form state changes. without re-rendering the entire component."
        note="It's your responsibility to unsubscribe when done."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};
export default SubscribeCallback;
