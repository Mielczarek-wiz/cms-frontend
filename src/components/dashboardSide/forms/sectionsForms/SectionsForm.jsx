import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Select from "../components/Select";
import Submit from "../components/Submit";
import MultipleCheckboxes from "../components/MultipleCheckboxes";

export default function SectionsForm({ item, handleAddAndModify }) {
  let defaultValues = {};
  if (item !== null) {
    defaultValues = {
      text: item.text,
      title: item.title,
      subtitle: item.subtitle,
      type: item.type,
      infoboxes: ["Hej1"],
      hidden: item.hidden.toString(),
    };
  } else {
    defaultValues = {
      text: "",
      title: "",
      subtitle: "",
      type: "type1",
      infoboxes: ["Hej1"],
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
          Modifying {item.title}
        </span>
      ) : (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Add new section
        </span>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input label={"text"} register={register} />
        <Input label={"title"} register={register} />
        <Input label={"subtitle"} register={register} />
        <Select
          label={"Choose type"}
          name={"type"}
          register={register}
          options={["type1", "type2", "type3"]}
        />
        <MultipleCheckboxes
          name="infoboxes"
          options={["Hej1", "Hej2", "Hej3"]}
          register={register}
        />
        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
