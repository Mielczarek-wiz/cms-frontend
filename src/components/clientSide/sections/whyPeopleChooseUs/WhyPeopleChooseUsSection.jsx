import { whyPeopleChooseUsMock } from "./mock.js";
import { whyPeopleChooseUsInfoboxesMock } from "./mock.js";
import Image from "next/image.js";

export default function WhyPeopleChooseUsSection() {
  return (
    <div className="bg-slate-100 py-10 px-8 md:px-16 lg:px-32">
        <div className="flex flex-col items-center justify-center pb-12 w-1/2 mx-auto text-center">
            <p className="text-4xl pb-6">{whyPeopleChooseUsMock.title}</p>
            <p className="font-thin text-neutral-500">{whyPeopleChooseUsMock.text}</p>
        </div>
        <div className="flex justify-between">
            {whyPeopleChooseUsInfoboxesMock.map((item) => {
                return (
                    <div key={item.id} className="flex flex-col items-center mx-20">
                        <Image src={item.iconRef} width="30" height="30" alt="icon" className="flex pb-4"/>
                        <p className="text-neutral-800 text-5xl pb-4">{item.information}</p>
                        <p className="text-neutral-500 whitespace-pre">{(item.subinformation !== null && item.subinformation !== undefined) ? item.subinformation : ' '}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
