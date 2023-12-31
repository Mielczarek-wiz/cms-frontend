import Image from "next/image";
import UsersForm from "./userForms/UsersForm";
import GeneralsForm from "./generalsForms/GeneralsForm";
import PagesForm from "./pagesForms/PagesForm";
import SlidersForm from "./slidersForms/SlidersForm";
import RolesForm from "./rolesForms/RolesForm";
import TypesForm from "./typesForms.jsx/TypesForm";
import SectionsForm from "./sectionsForms/SectionsForm";
import InfoboxesForm from "./infoboxesForms/InfoboxesForm";

export default function FormPopup({ setIsOpen, form, item = null }) {
  const renderForm = (form) => {
    switch (form) {
      case "Users":
        return <UsersForm item={item} />;
        break;
      case "Generals":
        return <GeneralsForm item={item} />;
        break;
      case "Pages":
        return <PagesForm item={item} />;
        break;
      case "Sliders":
        return <SlidersForm item={item} />;
        break;
      case "Roles":
        return <RolesForm item={item} />;
        break;
      case "Types":
        return <TypesForm item={item} />;
        break;
      case "Sections":
        return <SectionsForm item={item} />;
        break;
      case "Infoboxes":
        return <InfoboxesForm item={item} />;
        break;
      default:
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-75">
      <div className="flex flex-row items-center justify-center w-full h-full ">
        <div className="relative max-h-screen p-8 overflow-x-hidden overflow-y-auto bg-white w-fit">
          <button
            className="absolute p-1 bg-red-600 rounded top-2 right-2 hover:bg-red-800"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/x.svg" alt="Close" width={25} height={25} />
          </button>
          {renderForm(form)}
        </div>
      </div>
    </div>
  );
}
