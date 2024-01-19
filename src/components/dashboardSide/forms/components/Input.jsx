export default function Input({
  label,
  register,
  type = "text",
  required,
  validate = null,
  pattern = null,
}) {
  return (
    <div className="flex flex-col items-start justify-start text-black">
      <label className="p-1 py-2 italic font-semibold text-left text-black ">
        {label.charAt(0).toUpperCase() + label.slice(1)}:
      </label>
      <input
        type={type}
        className="w-full px-2 py-4 italic tracking-wide text-black border rounded-md h-7 accent-slate-600"
        placeholder={label}
        {...register(label, { required, validate, pattern })}
      />
    </div>
  );
}
