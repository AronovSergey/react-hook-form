import React from "react";
import Header from "../../components/Header/Header.component";
import { useForm } from "react-hook-form";

let renderCount = 0;

interface FormValues {
  firstName: string;
  lastName: string;
}

const ResetOnSubmitSuccess = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  renderCount++;

  const onSubmit = (data: any) => console.log(data);

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <Header
        renderCount={renderCount}
        description="To reset the form after a successful submission, you can use the isSubmitSuccessful state."
        note="Rest your entirely form state, fields reference, and subscriptions."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
};
export default ResetOnSubmitSuccess;
