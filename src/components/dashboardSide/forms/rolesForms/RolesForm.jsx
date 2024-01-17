import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Radio from "../components/Radio";
import Input from "../components/Input";
import Submit from "../components/Submit";

export default function RolesForm({ item, handleAddAndModify }) {
  let defaultValues = {};
  if (item !== null) {
    defaultValues = {
      name: item.name,
      hidden: item.hidden.toString(),
    };
  } else {
    defaultValues = {
      name: "",
      hidden: "true",
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
          Add new role
        </span>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input label={"name"} register={register} />
        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
