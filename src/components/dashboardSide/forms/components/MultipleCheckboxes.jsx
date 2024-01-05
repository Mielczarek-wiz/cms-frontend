import Checkbox from "./Checkbox";
import Fieldset from "./Fieldset";

export default function MultipleCheckboxes({ name, options, register }) {
  return (
    <Fieldset legend={`Choose ${name}`}>
      {options.map((option) => (
        <Checkbox
          key={option}
          name={name}
          option={option}
          register={register}
        />
      ))}
    </Fieldset>
  );
}
