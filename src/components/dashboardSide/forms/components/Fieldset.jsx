export default function Fieldset({ legend = "", children }) {
  return (
    <fieldset className="flex flex-col items-start justify-center px-1 py-2 text-black border">
      <legend className="italic font-semibold text-left text-black">
        {legend}:
      </legend>
      {children}
    </fieldset>
  );
}
