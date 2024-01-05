export default function Checkbox({ name, option, register }) {
  return (
    <label className="w-full py-2" key={option}>
      <input
        className="mr-2"
        type="checkbox"
        value={option}
        name={name}
        {...register(name)}
      />
      {option}
    </label>
  );
}
