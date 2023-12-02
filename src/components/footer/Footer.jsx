import { generalLayoutMock } from "./mock";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 p-8">
      <div className="">
          {generalLayoutMock.map((item) => {
            return item.key === "aboutUsTitle" ?
            <p className="text-white font-bold">
                {item.value}
            </p>
            :
            <></>
          })}
          {generalLayoutMock.map((item) => {
            return item.key === "aboutUsText" ?
            <p className="text-neutral-500 mt-6">
                {item.value}
            </p>
            :
            <></>
          })}
      </div>
      <div className="text-white font-bold py-8">
        HERE BE NAV
      </div>
      <hr className="h-px my-8 bg-neutral-500 border-0"/>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between max-h-32 items-start">
        <Image src="/images/logo-light-115x34.png" alt="Logo" width={115} height={10} />
        {generalLayoutMock.map((item) => {
            return item.key === "copyrightText" ?
            <span className="text-neutral-500 mt-6">
                {item.value}
            </span>
            :
            <></>
          })}
      </div>
    </footer>
  );
}