import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Fieldset from "../components/Fieldset";
import Radio from "../components/Radio";
import Submit from "../components/Submit";
import Error from "../components/Error";
import { useUserStore } from "@/zustand/useUserStore";

export default function TypesForm({ item, handleAddAndModify }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: item ? item.type.toString() : "",
      hidden: item ? item.hidden.toString() : "true",
    },
  });
  const onSubmit = async (data) =>
    handleAddAndModify({ ...data, user: useUserStore.getState().user.email });
  return (
    <div className="space-y-4 h-fit w-fit">
      {item !== null ? (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Modifying {item.type}
        </span>
      ) : (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Add new type
        </span>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"type"}
          register={register}
          required={"Type name is required"}
        />
        {errors.type && <Error message={errors.type.message} />}
        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
