export default function Error({ message }) {
  return (
    <span className="italic font-light tracking-wider text-red-500">
      {message}
    </span>
  );
}
