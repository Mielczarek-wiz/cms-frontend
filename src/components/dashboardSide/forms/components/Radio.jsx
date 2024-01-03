export default function Radio({ register, value, group }) {
  return (
    <div>
      <input
        type="radio"
        className="mr-2 text-black"
        value={value.toString()}
        {...register(group)}
      />
      <label htmlFor={value.toString()}>{value.toString()}</label>
    </div>
  );
}
