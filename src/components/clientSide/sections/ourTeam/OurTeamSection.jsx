"use client";

import { ourTeamMock } from "./mock.js";
import Image from "next/image.js";

function handleGoToPerson(item) {
  alert("TODO")
}

function handleCallPhone(item) {
  phone = item.phone
  alert("TODO")
}

export default function OurTeamSection() {
  const maxItems = 4; //pretty sure we need to replace that kek
  let index = 0;
  return (
    <div className="bg-slate-100">
      <p className="text-3xl text-neutral-900 flex text-center justify-center">
        OUR TEAM
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-0 md:mx-32 py-4">
        {ourTeamMock.map((item) => {
          index += 1;
          return index <= maxItems ? (
            <div key={item.id} className="p-8 flex items-start">
              <Image
                src={item.photo}
                width="170"
                height="172"
                alt="teammate"
                className="rounded-md flex align-middle"
              />
              <div className="ml-4 pr-4">
                <a
                  onClick={(item) => handleGoToPerson(item)}
                  className="text-xl text-neutral-900 hover:text-blue-500 transition-all duration-500"
                >
                  {item.name}
                </a>
                <p className="text-neutral-900">{item.job}</p>
                <div className="flex py-4">
                  <Image src="phone.svg" alt="phone" width="20" height="20" />
                  <a
                    onClick = {(item) => handleCallPhone(item)}
                    className="pl-4 text-neutral-900 hover:text-blue-500 transition-all duration-500"
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
    </div>
  );
}
