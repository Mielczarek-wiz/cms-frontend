export default function Input({ label, register, type = "text", required }) {
  return (
    <div className="flex flex-col items-start justify-start">
      <label className="p-1 italic font-semibold text-left">{label}:</label>
      <input
        type={type}
        className="border rounded-md h-7 w-30"
        {...register(label, { required })}
      />
    </div>
  );
}
