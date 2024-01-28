import { useForm, useWatch } from "react-hook-form";
import Fieldset from "../components/Fieldset";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Submit from "../components/Submit";
import Error from "../components/Error";
import { useUserStore } from "@/zustand/useUserStore";

export default function UsersForm({
  item,
  handleAddAndModify = handleAddAndModify,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: item ? item.name : "",
      surname: item ? item.surname : "",
      email: item ? item.email : "",
      password: "",
      confirmPassword: "",
      role: item ? item.role : "Moderator",
    },
  });
  const onSubmit = async (data) =>
    handleAddAndModify({ ...data, user: useUserStore.getState().user.email });
  return (
    <div className="space-y-4 h-fit w-fit">
      {item !== null ? (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Modifying {item.name}
        </span>
      ) : (
        <span className="flex flex-row items-center self-center justify-center text-xl italic font-semibold text-center text-black border-b border-black ">
          Add new user
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
          label={"surname"}
          register={register}
          required={"Surname is required"}
        />
        {errors.surname && <Error message={errors.surname.message} />}
        <Input
          label={"email"}
          register={register}
          type="email"
          required={"Email is required"}
        />
        {errors.email && <Error message={errors.email.message} />}
        <Input
          label={"password"}
          register={register}
          type="password"
          required={"Password is required"}
          pattern={{
            value:
              /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/i,
            message: "Password must be a strong",
          }}
        />
        {errors.password && <Error message={errors.password.message} />}
        <Input
          label={"confirmPassword"}
          register={register}
          type="password"
          required={"Confirmation password is required"}
          validate={(value) =>
            value === watch("password") || "The passwords do not match"
          }
        />
        {errors.confirmPassword && (
          <Error message={errors.confirmPassword.message} />
        )}
        <Fieldset legend="Select a role">
          <Radio value={"Moderator"} register={register} group={"role"} />
          <Radio value={"Admin"} register={register} group={"role"} />
        </Fieldset>
        <Submit />
      </form>
    </div>
  );
}
