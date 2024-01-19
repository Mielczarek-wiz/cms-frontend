export default function Radio({ register, value, group }) {
  return (
    <label className="w-full py-2 ">
      <input
        type="radio"
        className="h-4 mr-2 text-black border-none accent-slate-600"
        value={value.toString()}
        {...register(group)}
      />
      {value.toString()}
    </label>
  );
}
