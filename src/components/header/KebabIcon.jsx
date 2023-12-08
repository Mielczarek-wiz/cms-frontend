import Button from "../buttons/Button";
import Address from "./Address";

export default function KebabIcon({children}) {
  const wtf = () => {
    console.log("hej");
  };

  return (
    <div
      id="container"
      className="flex flex-row items-center justify-center p-2 m-0 bg-white w-fit h-fit lg:hidden"
    >
      <div id="menu-wrap" className="relative w-5 h-5">
        <input type="checkbox" className="toggler " />
        <div className="dots">
          <div></div>
        </div>
        <div className="menu">
          <div className="flex flex-col items-start justify-start w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
