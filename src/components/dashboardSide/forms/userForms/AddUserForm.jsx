import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Submit from "../components/Submit";

export default function AddUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label={"Name"} register={register} />
      <Input label={"Surname"} register={register} />
      <Input label={"Email"} register={register} type="email" />
      <Input label={"Password"} register={register} type="password" />
      <Input label={"Confirm Password"} register={register} type="password" />
      <Fieldset legend="Select a role">
        <Radio value={"Moderator"} register={register} group={"role"} />
        <Radio value={"Admin"} register={register} group={"role"} />
      </Fieldset>
      <Submit />
    </form>
  );
}
