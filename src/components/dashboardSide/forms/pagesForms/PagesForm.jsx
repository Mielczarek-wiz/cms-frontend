import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Select from "../components/Select";
import Submit from "../components/Submit";

export default function PagesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="space-y-4 h-fit w-fit">
      <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
        Add new page
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label={"Name"} register={register} />
        <Input label={"Link"} register={register} />
        <Select
          label={"Choose parent page"}
          name={"ParentPage"}
          register={register}
          options={["page1", "page2"]}
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
