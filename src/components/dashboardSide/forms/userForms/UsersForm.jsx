import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Submit from "../components/Submit";

export default function UsersForm({
  item,
  handleAddAndModify = handleAddAndModify,
}) {
  let defaultValues = {};
  if (item !== null) {
    defaultValues = {
      name: item.name,
      surname: item.surname,
      email: item.email,
      password: "",
      confirmPassword: "",
      role: item.role,
    };
  } else {
    defaultValues = {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "Moderator",
    };
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });
  const onSubmit = async (data) => handleAddAndModify(data);
  return (
    <div className="space-y-4 h-fit w-fit">
      {item !== null ? (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Modifying {item.name}
        </span>
      ) : (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Add new user
        </span>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input label={"name"} register={register} />
        <Input label={"surname"} register={register} />
        <Input label={"email"} register={register} type="email" />
        <Input label={"password"} register={register} type="password" />
        <Input label={"confirmPassword"} register={register} type="password" />
        <Fieldset legend="Select a role">
          <Radio value={"Moderator"} register={register} group={"role"} />
          <Radio value={"Admin"} register={register} group={"role"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
