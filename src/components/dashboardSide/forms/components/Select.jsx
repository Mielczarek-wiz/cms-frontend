export default function Select({ register, label, name, options }) {
  return (
    <div className="flex flex-col items-start justify-center">
      <label className="p-1 italic font-semibold text-left" htmlFor={name}>
        {label}:
      </label>
      <select className="w-full px-2 border rounded-md h-7" {...register(name)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option.toString()}
          </option>
        ))}
      </select>
    </div>
  );
}
