import Image from "next/image";
import UsersForm from "./userForms/UsersForm";
import GeneralsForm from "./generalsForms/GeneralsForm";
import PagesForm from "./pagesForms/PagesForm";
import SlidersForm from "./slidersForms/SlidersForm";
import RolesForm from "./rolesForms/RolesForm";
import TypesForm from "./typesForms.jsx/TypesForm";
import SectionsForm from "./sectionsForms/SectionsForm";
import InfoboxesForm from "./infoboxesForms/InfoboxesForm";

export default function FormPopup({
  setPopUp,
  form,
  item = null,
  handleAddAndModify = null,
}) {
  const renderForm = (form) => {
    switch (form) {
      case "Users":
        return (
          <UsersForm item={item} handleAddAndModify={handleAddAndModify} />
        );
        break;
      case "Generals":
        return (
          <GeneralsForm item={item} handleAddAndModify={handleAddAndModify} />
        );
        break;
      case "Pages":
        return (
          <PagesForm item={item} handleAddAndModify={handleAddAndModify} />
        );
        break;
      case "Sliders":
        return (
          <SlidersForm item={item} handleAddAndModify={handleAddAndModify} />
        );
        break;
      case "Roles":
        return (
          <RolesForm item={item} handleAddAndModify={handleAddAndModify} />
        );
        break;
      case "Types":
        return (
          <TypesForm item={item} handleAddAndModify={handleAddAndModify} />
        );
        break;
      case "Sections":
        return (
          <SectionsForm item={item} handleAddAndModify={handleAddAndModify} />
        );
        break;
      case "Infoboxes":
        return (
          <InfoboxesForm item={item} handleAddAndModify={handleAddAndModify} />
        );
        break;
      default:
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-[100dvw] h-[100dvh] bg-black bg-opacity-75">
      <div className="flex flex-row items-center justify-center w-[100dvw] h-[100dvh] ">
        <div className="relative z-50 max-h-screen p-8 overflow-x-hidden overflow-y-auto bg-white w-fit">
          <button
            className="absolute p-1 bg-red-600 rounded top-2 right-2 hover:bg-red-800"
            onClick={() => setPopUp({ item: null, isOpen: false })}
          >
            <Image src="/x.svg" alt="Close" width={25} height={25} />
          </button>
          {renderForm(form, handleAddAndModify)}
        </div>
      </div>
    </div>
  );
}
