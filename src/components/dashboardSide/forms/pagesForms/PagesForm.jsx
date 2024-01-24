import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Select from "../components/Select";
import Submit from "../components/Submit";
import MultipleCheckboxes from "../components/MultipleCheckboxes";
import Error from "../components/Error";
import { useUserStore } from "@/zustand/useUserStore";
import { useCall } from "@/api/apiCalls";
import { useState, useEffect, useCallback } from "react"; 
import { getRoute } from "@/api/apiRoutes";

export default function PagesForm({ item, handleAddAndModify }) {
  const { call } = useCall();  
  const [parentPages, setParentPages] = useState([]);
  const [pageSections, setPageSections] = useState([]);
  const fetchParentPage = useCallback(async () => {
    const fetchedPages = await call("get", getRoute("pages"), {}, true);
    setParentPages(fetchedPages.map((page) => (page.name)));
  }, [call])
  const fetchPageSections = useCallback(async () => {
    const fetchedSections = await call("get", getRoute("sections"), {}, true);
    setPageSections(fetchedSections.map((section) => (section.title)));
  }, [call])
  useEffect(() => {
    fetchParentPage();
    fetchPageSections();
  }, [fetchParentPage, fetchPageSections])
  let defaultValues = {};
  if (item !== null) {
    defaultValues = {
      name: item.name,
      link: item.link,
      parentPage: "",
      sections: item.sections,
      hidden: item.hidden.toString(),
    };
  } else {
    defaultValues = {
      name: "",
      link: "",
      parentPage: "",
      sections: [],
      hidden: "true",
    };
  }
  console.log(item)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });
  const onSubmit = async (data) => {
    console.log(data)
    handleAddAndModify({...data, user: useUserStore.getState().user.email});
  }
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
          options={parentPages}
        />
        <MultipleCheckboxes
          name={"sections"}
          options={pageSections}
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
