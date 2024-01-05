export default function InputFile({ label, register, required }) {
  return (
    <div className="flex flex-col items-start justify-start text-black">
      <label className="p-1 italic font-semibold text-left text-black">
        {label.charAt(0).toUpperCase() + label.slice(1)}:
      </label>
      <input type="file" className="" {...register(label, { required })} />
    </div>
  );
}
