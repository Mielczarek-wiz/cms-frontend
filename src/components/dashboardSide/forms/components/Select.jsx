import { useEffect } from "react";

export default function Select({
  register,
  label,
  name,
  options,
  defaultValue = options[0],
}) {
  const { ref, ...rest } = register(name);
  useEffect(() => {
    ref({ value: defaultValue });
  }, [defaultValue, ref]);
  return (
    <div className="flex flex-col items-start justify-center w-full text-black">
      <label
        className="p-1 italic font-semibold text-left text-black"
        htmlFor={name}
      >
        {label}:
      </label>
      <select
        className="w-full px-2 text-black border rounded-md h-7 form-select"
        ref={ref}
        {...rest}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.toString()}
          </option>
        ))}
      </select>
    </div>
  );
}
