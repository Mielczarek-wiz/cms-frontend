import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Select from "../components/Select";
import Submit from "../components/Submit";
import MultipleCheckboxes from "../components/MultipleCheckboxes";
import Error from "../components/Error";
import { useUserStore } from "@/zustand/useUserStore";

/* 
  Here you should do some fetching for "sections" and "page" values.
*/
export default function PagesForm({ item, handleAddAndModify }) {
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
  const sections = [
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
  const onSubmit = async (data) => handleAddAndModify({...data, user: useUserStore.getState().user.email});
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
        <Input
          label={"name"}
          register={register}
          required={"Name is required"}
        />
        {errors.name && <Error message={errors.name.message} />}

        <Input
          label={"link"}
          register={register}
          required={"Link is required"}
        />
        {errors.link && <Error message={errors.link.message} />}

        <Select
          label={"Choose parent page"}
          name={"parentPage"}
          register={register}
          options={["page1", "page2"]}
        />
        <MultipleCheckboxes
          name={"sections"}
          options={sections}
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
