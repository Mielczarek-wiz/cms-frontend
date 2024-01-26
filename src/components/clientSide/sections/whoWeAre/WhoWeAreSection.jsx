"use client";

import { whoWeAreMock } from "./mock.js";
import Image from "next/image.js";

function handleRedirectToProperties() {
  alert("TODO");
}

export default function WhoWeAreSection() {
  return (
    <section className="mx-8 my-10 md:mx-16 lg:mx-32">
      {whoWeAreMock.map((item) => {
        return (
          <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2">
            <Image
              src={item.imgRef}
              width="570"
              height="388"
              alt="career"
              className="flex pb-6 lg:pb-0"
            />
            <div className="flex flex-col justify-between">
              <h1 className="pb-10 text-4xl">{item.title}</h1>
              <h2 className="pb-6 text-lg font-thin text-neutral-600">
                {item.subtitle}
              </h2>
              <p className="pb-10 font-thin text-neutral-600">{item.text}</p>
              <button
                onClick={handleRedirectToProperties}
                className="self-start px-16 py-4 text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-neutral-800"
              >
                VIEW PROPERTIES
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
