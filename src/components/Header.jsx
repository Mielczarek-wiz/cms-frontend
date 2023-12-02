import Image from "next/image";
import HamburgerIcon from "./HamburgerIcon";
import KebabIcon from "./kebabIcons/KebabIcon";

export default function Header() {

  return (
    <header className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-row items-center justify-start space-x-2">
        <HamburgerIcon />
        <Image src="/images/logo-default-151x44.png" alt="Logo" width={110} height={20} />
      </div>
      <KebabIcon />
    </header>
  )
}
