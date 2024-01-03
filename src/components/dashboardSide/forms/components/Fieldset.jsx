export default function Fieldset({ legend = "", children }) {
  return (
    <fieldset className="px-4 py-2 text-black border">
      <legend className="p-1 italic font-semibold text-left text-black">
        {legend}:
      </legend>
      {children}
    </fieldset>
  );
}
