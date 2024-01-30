import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import InputFile from "../components/InputFile";
import Radio from "../components/Radio";
import Submit from "../components/Submit";
import Error from "../components/Error";
import { useUserStore } from "@/zustand/useUserStore";
import Textarea from "../components/Textarea";

export default function InfoboxesForm({ item, handleAddAndModify }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      information: item ? item.information : "",
      subinformation: item ? item.subinformation : "",
      hidden: item ? item.hidden.toString() : "true",
    },
  });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("icon", data.icon[0]);
    data = {
      ...data,
      icon: data.icon[0].name,
      user: useUserStore.getState().user.email,
    };
    formData.append("infobox", JSON.stringify(data));
    handleAddAndModify(formData, true);
  };

  return (
    <div className="space-y-4 h-fit w-fit">
      {item !== null ? (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Modifying {item.information}
        </span>
      ) : (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Add new infobox
        </span>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"information"}
          register={register}
          required={"Information is required"}
        />
        {errors.information && <Error message={errors.information.message} />}
        <Textarea
          label={"subinformation"}
          register={register}
          required={"Subinformation is required"}
        />
        {errors.subinformation && (
          <Error message={errors.subinformation.message} />
        )}
        <InputFile
          label={"icon"}
          register={register}
          required={"Icon is required"}
        />
        {errors.icon && <Error message={errors.icon.message} />}

        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
