"use client";

import { ourTeamMock } from "./mock.js";
import Image from "next/image.js";

function handleGoToPerson(item) {
  alert("TODO");
}

function handleCallPhone(item) {
  phone = item.phone;
  alert("TODO");
}

export default function OurTeamSection() {
  const maxItems = 4; //pretty sure we need to replace that kek
  let index = 0;
  return (
    <section className="bg-slate-100">
      <h1 className="flex justify-center text-3xl text-center text-neutral-900">
        OUR TEAM
      </h1>
      <div className="grid grid-cols-1 py-4 mx-0 md:grid-cols-2 md:mx-32">
        {ourTeamMock.map((item) => {
          index += 1;
          return index <= maxItems ? (
            <div key={item.id} className="flex items-start p-8">
              <Image
                src={item.photo}
                width="170"
                height="172"
                alt="teammate"
                className="flex align-middle rounded-md"
              />
              <div className="pr-4 ml-4">
                <a
                  onClick={(item) => handleGoToPerson(item)}
                  className="text-xl transition-all duration-500 text-neutral-900 hover:text-blue-500"
                >
                  {item.name}
                </a>
                <p className="text-neutral-900">{item.job}</p>
                <div className="flex py-4">
                  <Image src="phone.svg" alt="phone" width="20" height="20" />
                  <a
                    onClick={(item) => handleCallPhone(item)}
                    className="pl-4 transition-all duration-500 text-neutral-900 hover:text-blue-500"
                  >
                    {item.phone}
                  </a>
                </div>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
}
