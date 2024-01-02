import Image from "next/image";
import AddUserForm from "./userForms/AddUserForm";

export default function FormPopup({ setIsOpen, form }) {
  const renderForm = (form) => {
    switch (form) {
      case "Users":
        return <AddUserForm />;
        break;
      case "General":
        return;
        break;
      case "Pages":
        return;
        break;
      case "Sliders":
        return;
        break;
      case "Roles":
        return;
        break;
      case "Types":
        return;
        break;
      case "Sections":
        return;
        break;
      case "Infoboxes":
        return;
        break;
      default:
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-75">
      <div className="relative w-4/5 p-10 translate-x-1/2 translate-y-1/2 bg-white md:w-1/2">
        <button
          className="absolute p-1 bg-red-600 border rounded top-2 right-2 hover:bg-red-800"
          onClick={() => setIsOpen(false)}
        >
          <Image src="/x.svg" alt="Close" width={25} height={25} />
        </button>
        {renderForm(form)}
      </div>
    </div>
  );
}
