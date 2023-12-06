import { generalLayoutMock } from "./mock";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full p-8 bg-neutral-800 h-fit">
      <div className="">
          {generalLayoutMock.map((item) => {
            return item.key === "aboutUsTitle" ?
            <p key={item.id} className="font-bold text-white">
                {item.value}
            </p>
            :
            null
          })}
          {generalLayoutMock.map((item) => {
            return item.key === "aboutUsText" ?
            <p key={item.id} className="mt-6 text-neutral-500">
                {item.value}
            </p>
            :
            null
          })}
      </div>
      <div className="py-8 font-bold text-white">
        HERE BE NAV
      </div>
      <hr className="h-px my-8 border-0 bg-neutral-500"/>
      <div className="flex flex-col items-start justify-between md:flex-row lg:flex-row max-h-32">
        <Image src="/images/logo-light-115x34.png" alt="Logo" width={115} height={10} />
        {generalLayoutMock.map((item) => {
            return item.key === "copyrightText" ?
            <span key={item.id} className="mt-6 text-neutral-500">
                {item.value}
            </span>
            :
            null
          })}
      </div>
    </footer>
  );
}