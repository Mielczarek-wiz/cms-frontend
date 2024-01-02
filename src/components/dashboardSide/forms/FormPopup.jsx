import { useForm } from "react-hook-form";
import Input from "./components/Input";
import Fieldset from "./components/Fieldset";
import Radio from "./components/Radio";

export default function FormPopup({ setIsOpen }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-75">
      <div className="absolute p-10 translate-y-1/2 bg-white w-96 left-1/2 top-1/2 -m-36">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label={"Name"} register={register} />
          <Input label={"Surname"} register={register} />
          <Input label={"Email"} register={register} type="email" />
          <Fieldset legend="Select a role">
            <Radio value={"Moderator"} register={register} group={"role"} />
            <Radio value={"Admin"} register={register} group={"role"} />
          </Fieldset>
        </form>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  );
}
