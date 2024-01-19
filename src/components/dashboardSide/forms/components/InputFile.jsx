export default function InputFile({ label, register, required }) {
  return (
    <div className="flex flex-col items-start justify-start text-black">
      <label className="p-1 italic font-semibold text-left text-black">
        {label.charAt(0).toUpperCase() + label.slice(1)}:
      </label>
      <input
        type="file"
        className=" file:py-1 file:px-3 file:border file:border-slate-200 file:rounded-md file:text-xs file:font-medium file:bg-slate-300 file:text-slate-600 hover:file:cursor-pointer hover:file:bg-slate-500 hover:file:text-slate-50"
        {...register(label, { required })}
      />
    </div>
  );
}
