"use client";

import { whoWeAreMock } from "./mock.js";
import Image from "next/image.js";

function handleRedirectToProperties() {
    alert("TODO");
}

export default function WhoWeAreSection() {
  return (
    <div className="my-10 mx-8 md:mx-16 lg:mx-32">
        {whoWeAreMock.map((item) => {
            return (
                <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2">
                    <Image src={item.imgRef} width="570" height="388" alt="career" className="flex pb-6 lg:pb-0"/>
                    <div className="flex flex-col justify-between">
                        <p className="text-4xl pb-10">{item.title}</p>
                        <p className="text-lg text-neutral-600 font-thin pb-6">{item.subtitle}</p>
                        <p className="text-neutral-600 font-thin pb-10">{item.text}</p>
                        <button onClick={handleRedirectToProperties} className="bg-blue-500 hover:bg-neutral-800 text-white self-start py-4 px-16 rounded-md transition-colors duration-300">
                            VIEW PROPERTIES
                        </button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
 