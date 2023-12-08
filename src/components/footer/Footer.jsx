import { generalLayoutMock } from "./mock";
import Image from "next/image";
import Social from "../social/Social"

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
      <div className="text-white font-bold py-8 flex flex-rows justify-between">
        <div>HERE BE NAV</div>
        <Social/>
      </div>
      <hr className="h-px my-8 bg-neutral-500 border-0"/>
      <div className="flex flex-col items-center md:flex-row md:items-start justify-between">
        <Image src="/images/logo-light-115x34.png" alt="Logo" width={115} height={10} />
        {generalLayoutMock.map((item) => {
            return item.key === "copyrightText" ?
            <span className="text-neutral-500 mt-6 md:mt-0">
                {item.value}
            </span>
            :
            <></>
          })}
      </div>
    </footer>
}