import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import InputFile from "../components/InputFile";
import Radio from "../components/Radio";
import Submit from "../components/Submit";

export default function InfoboxesForm({ item }) {
  let defaultValues = {};
  if (item !== null) {
    defaultValues = {
      information: item.information,
      subinformation: item.subinformation,
      hidden: item.hidden.toString(),
    };
  } else {
    defaultValues = {
      information: "",
      subinformation: "",
      hidden: "true",
    };
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });
  const onSubmit = (data) => console.log(data);
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
        <Input label={"information"} register={register} />
        <Input label={"subinformation"} register={register} />
        <InputFile label={"icon"} register={register} />
        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
