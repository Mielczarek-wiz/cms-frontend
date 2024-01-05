export default function Radio({ register, value, group }) {
  return (
    <label className="w-full py-2">
      <input
        type="radio"
        className="mr-2 text-black"
        value={value.toString()}
        {...register(group)}
      />
      {value.toString()}
    </label>
  );
}
