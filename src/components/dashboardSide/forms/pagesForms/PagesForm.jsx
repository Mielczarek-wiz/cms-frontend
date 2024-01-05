import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Select from "../components/Select";
import Submit from "../components/Submit";
import MultipleCheckboxes from "../components/MultipleCheckboxes";

export default function PagesForm({ item }) {
  let defaultValues = {};
  if (item !== null) {
    defaultValues = {
      name: item.name,
      link: item.link,
      page: item.page,
      sections: [
        "section1",
        "section2",
      ] /* We probably will send another request for that */,
      hidden: item.hidden.toString(),
    };
  } else {
    defaultValues = {
      name: "",
      link: "",
      sections: [],
      description: "",
      hidden: "true",
    };
  }
  const rainbow = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
    "section9",
    "section10",
    "section11",
    "section12",
    "section13",
    "section14",
    "section15",
    "section16",
  ];
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
          Modifying {item.name}
        </span>
      ) : (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Add new page
        </span>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input label={"name"} register={register} />
        <Input label={"link"} register={register} />
        <Select
          label={"Choose parent page"}
          name={"parentPage"}
          register={register}
          options={["page1", "page2"]}
        />
        <MultipleCheckboxes
          name={"sections"}
          options={rainbow}
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
