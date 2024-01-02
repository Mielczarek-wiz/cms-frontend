export default function Radio({ register, value, group }) {
  return (
    <div>
      <input type="radio" value={value} {...register(group)} />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}
