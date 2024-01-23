import { useForm } from "react-hook-form";
import { useCall } from "@/api/apiCalls";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import InputFile from "../components/InputFile";
import Radio from "../components/Radio";
import Select from "../components/Select";
import Submit from "../components/Submit";
import MultipleCheckboxes from "../components/MultipleCheckboxes";
import Error from "../components/Error";
import { getRoute } from "@/api/apiRoutes";
import { useUserStore } from "@/zustand/useUserStore";
import { useEffect, useState, useCallback } from "react";

/* 
  Here you should do some fetching for "infoboxes" and "type" values.
*/

export default function SectionsForm({ item, handleAddAndModify }) {
  const { call } = useCall();  
  const [types, setTypes] = useState([]);
  const [infoboxes, setInfoboxes] = useState([]);
  const fetchTypes = useCallback(async () => {
    const fetchedTypes = await call("get", getRoute("types"), {}, true);
    setTypes(fetchedTypes.map((type) => (type.type)));
  }, [call])
  const fetchInfoboxes = useCallback(async () => {
    const fetchedInfoboxes = await call("get", getRoute("infoboxes"), {}, true);
    setInfoboxes(fetchedInfoboxes.map((infobox) => (infobox.information)));
  }, [call])
  useEffect(() => {
    fetchTypes();
    fetchInfoboxes();
  }, [fetchTypes, fetchInfoboxes])
  let defaultValues = {};
  if (item !== null) {
    defaultValues = {
      text: item.text,
      title: item.title,
      subtitle: item.subtitle,
      type: item.type,
      infoboxes: item.infoboxes,
      hidden: item.hidden.toString(),
    };
  } else {
    defaultValues = {
      text: "",
      title: "",
      subtitle: "",
      type: types[0],
      infoboxes: [],
      hidden: "true",
    };
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });
  const onSubmit = async (data) => {
    const formData = new FormData()
      formData.append("image", data.image[0])
      data = {...data, image: data.image[0].name, user: useUserStore.getState().user.email}
    if(data.type === '') {
      data = {...data, type: types[0]}
    }
    console.log("Date", data)
    formData.append("section", JSON.stringify(data))
    handleAddAndModify(formData, true);
  }
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
        <Input
          label={"title"}
          register={register}
          required={"Title is required"}
        />
        {errors.title && <Error message={errors.title.message} />}

        <Input label={"text"} register={register} />
        <Input label={"subtitle"} register={register} />
        <InputFile
          label={"image"}
          register={register}
        />
        <Select
          label={"Choose type"}
          name={"type"}
          register={register}
          options={types}
        />
        <MultipleCheckboxes
          name="infoboxes"
          options={infoboxes}
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
