import { useForm } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Radio from "../components/Radio";
import Input from "../components/Input";
import Submit from "../components/Submit";
import { useUserStore } from "@/zustand/useUserStore";
import { useCallPost, useCallPut } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";

export default function RolesForm({ item }) {
  const { callPost } = useCallPost();
  const { callPut } = useCallPut();
  let defaultValues = {};
  if (item !== null) {
    defaultValues = {
      name: item.name,
      hidden: item.hidden.toString(),
    };
  } else {
    defaultValues = {
      name: "",
      hidden: "true",
    };
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues });
  const onSubmit = async (data) => {
    data = { ...data, user: useUserStore.getState().user.email };
    if (item !== null) {
      const res = await callPut(getRoute("roles") + `/${item.id}`, data, true);
      console.log(res);
    } else {
      const res = await callPost(getRoute("roles"), data, true);
      console.log(res);
    }
  };
  return (
    <div className="space-y-4 h-fit w-fit">
      {item !== null ? (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Modifying {item.name}
        </span>
      ) : (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Add new role
        </span>
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input label={"name"} register={register} />
        <Fieldset legend="Should it be hidden?">
          <Radio value={true} register={register} group={"hidden"} />
          <Radio value={false} register={register} group={"hidden"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
