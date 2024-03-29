import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Submit from "../components/Submit";
import Error from "../components/Error";
import { useUserStore } from "@/zustand/useUserStore";
import Textarea from "../components/Textarea";

export default function GeneralsForm({ item, handleAddAndModify }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      key: item ? item.key : "",
      value: item ? item.value : "",
      description: item ? item.description : "",
      hidden: item ? item.hidden.toString() : "true",
    },
  });
  const onSubmit = async (data) => {
    const newData = { ...data, user: useUserStore.getState().user.email };
    handleAddAndModify(newData);
  };
  return (
    <div className="space-y-4 h-fit w-fit">
      {item !== null ? (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Modifying {item.key}
        </span>
      ) : (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Add new generals
        </span>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input label={"key"} register={register} required={"Key is required"} />
        {errors.key && <Error message={errors.key.message} />}

        <Input
          label={"value"}
          register={register}
          required={"Value is required"}
        />
        {errors.value && <Error message={errors.value.message} />}
        <Textarea
          label={"description"}
          register={register}
          required={"Description is required"}
        />
        {errors.description && <Error message={errors.description.message} />}

        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
