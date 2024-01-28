import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Fieldset from "../components/Fieldset";
import Radio from "../components/Radio";
import Submit from "../components/Submit";
import InputFile from "../components/InputFile";
import Error from "../components/Error";
import { useUserStore } from "@/zustand/useUserStore";

export default function SlidersForm({ item, handleAddAndModify }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: item ? item.title : "",
      subtitle: item ? item.subtitle : "",
      text: item ? item.text : "",
      hidden: item ? item.hidden.toString() : "true",
    },
  });
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("photo", data.photo[0]);
    data = {
      ...data,
      photo: data.photo[0].name,
      user: useUserStore.getState().user.email,
    };
    formData.append("slider", JSON.stringify(data));
    handleAddAndModify(formData, true);
  };
  return (
    <div className="space-y-4 h-fit w-fit">
      {item !== null ? (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Modifying {item.title}
        </span>
      ) : (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Add new slider
        </span>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"title"}
          register={register}
          required={"Title is required"}
        />
        {errors.title && <Error message={errors.title.message} />}
        <Input
          label={"subtitle"}
          register={register}
          required={"Subtitle is required"}
        />
        {errors.title && <Error message={errors.title.message} />}
        <Input label={"text"} register={register} />

        <InputFile
          label={"photo"}
          register={register}
          required={"Photo is required"}
        />
        {errors.photo && <Error message={errors.photo.message} />}

        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
