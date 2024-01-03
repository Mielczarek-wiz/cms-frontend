import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Fieldset from "../components/Fieldset";
import Radio from "../components/Radio";
import Submit from "../components/Submit";
import InputFile from "../components/InputFile";

export default function SlidersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="space-y-4 h-fit w-fit">
      <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center border-b border-black ">
        Add new slider
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label={"Text"} register={register} />
        <Input label={"Title"} register={register} />
        <InputFile label={"Photo"} register={register} />
        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
