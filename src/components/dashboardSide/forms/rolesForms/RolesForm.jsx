import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Radio from "../components/Radio";
import Input from "../components/Input";
import Submit from "../components/Submit";

export default function RolesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="space-y-4 h-fit w-fit">
      <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
        Add new role
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label={"Name"} register={register} />
        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
