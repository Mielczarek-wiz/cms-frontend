import { generalLayoutMock } from "./mock";
import Image from "next/image";
import Social from "../social/Social"
import Menu from "../menu/Menu";

export default function Footer() {
  return <footer className="p-8 bg-neutral-800">
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
      <div className="flex justify-between py-8 font-bold text-white flex-rows">
        <Menu className="flex flex-row justify-start item-center "/>
        <Social/>
      </div>
      <hr className="h-px my-8 border-0 bg-neutral-500"/>
      <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
        <Image src="/images/logo-light-115x34.png" alt="Logo" width={115} height={10} />
        {generalLayoutMock.map((item) => {
            return item.key === "copyrightText" ?
            <span key={item.key} className="mt-6 text-neutral-500 md:mt-0">
                {item.value}
            </span>
            :
            <></>
          })}
      </div>
    </footer>
}