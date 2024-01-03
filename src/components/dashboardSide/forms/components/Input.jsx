export default function Input({ label, register, type = "text", required }) {
  return (
    <div className="flex flex-col items-start justify-start text-black">
      <label className="p-1 italic font-semibold text-left text-black">
        {label.charAt(0).toUpperCase() + label.slice(1)}:
      </label>
      <input
        type={type}
        className="px-2 text-black border rounded-md h-7 w-30"
        {...register(label, { required })}
      />
    </div>
  );
}
