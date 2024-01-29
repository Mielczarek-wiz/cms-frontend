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
import Textarea from "../components/Textarea";

export default function SectionsForm({ item, handleAddAndModify }) {
  const { call } = useCall();
  const [types, setTypes] = useState([]);
  const [infoboxes, setInfoboxes] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: item ? item.text : "",
      title: item ? item.title : "",
      subtitle: item ? item.subtitle : "",
      type: item ? item.type : "",
      infoboxes: item ? item.infoboxes : [],
      hidden: item ? item.hidden.toString() : "true",
    },
  });

  const fetchTypes = useCallback(async () => {
    const fetchedTypes = await call("get", getRoute("types"), {}, true);
    setTypes(fetchedTypes.map((type) => type.type));
  }, [call]);
  const fetchInfoboxes = useCallback(async () => {
    const fetchedInfoboxes = await call("get", getRoute("infoboxes"), {}, true);
    setInfoboxes(fetchedInfoboxes.map((infobox) => infobox.information));
  }, [call]);

  useEffect(() => {
    fetchTypes();
    fetchInfoboxes();
    setValue("type", item ? item.type : types[0]);
  }, [fetchTypes, fetchInfoboxes, item, setValue, types]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    if (data.image.length > 0) {
      formData.append("image", data.image[0]);
      data = {
        ...data,
        image: data.image[0].name,
      };
    } else {
      formData.append("image", null);
      data = {
        ...data,
        image: "",
      };
    }
    data = { ...data, user: useUserStore.getState().user.email };
    formData.append("section", JSON.stringify(data));
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
        <Input label={"subtitle"} register={register} />
        <Textarea label={"text"} register={register} />

        <InputFile label={"image"} register={register} />
        <Select
          label={"Choose type"}
          name={"type"}
          register={register}
          options={types}
          defaultValue={item ? item.type : ""}
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
