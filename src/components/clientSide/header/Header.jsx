import Image from "next/image";
import HamburgerIcon from "./HamburgerIcon";
import KebabIcon from "./KebabIcon";
import Address from "./Address";
import Button from "../buttons/Button";
import Menu from "../menu/Menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-400">
      <div className="flex flex-row items-center justify-between px-4 py-2 lg:justify-evenly">
        <div className="flex flex-row items-center justify-start space-x-2">
          <HamburgerIcon />
          <Image
            src="/images/logo-default-151x44.png"
            alt="Logo"
            width={151}
            height={44}
          />
        </div>
        <KebabIcon>
          <Address />
          <Button className="w-full h-10 text-sm text-black bg-transparent border border-gray-500 rounded hover:bg-blue-500 hover:border-none hover:text-white">
            REQUEST A CALL
          </Button>
        </KebabIcon>
        <Address className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center" />
        <Button className="hidden h-10 text-sm text-black bg-transparent border border-gray-500 rounded lg:inline-block w-44 hover:bg-blue-500 hover:border-none hover:text-white ">
          REQUEST A CALL
        </Button>
      </div>
      <div className="w-full bg-gray-400 px-44">
        <Menu className="hidden lg:flex lg:flex-row lg:justify-start lg:item-center " />
      </div>
    </header>
  );
}
