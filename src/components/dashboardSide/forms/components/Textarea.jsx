export default function Textarea({ register, label, required, validate }) {
  return (
    <div className="flex flex-col items-start justify-start text-black">
      <label className="p-1 py-2 italic font-semibold text-left text-black ">
        {label.charAt(0).toUpperCase() + label.slice(1)}:
      </label>
      <textarea
        className="w-full h-12 px-2 py-2 italic tracking-wide text-black border rounded-md accent-slate-600"
        placeholder={label}
        {...register(label, { required, validate })}
      />
    </div>
  );
}
