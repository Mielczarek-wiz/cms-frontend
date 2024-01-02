export default function Radio({ register, value, group, required }) {
  return (
    <div>
      <input type="radio" value={value} {...register(group, { required })} />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}
