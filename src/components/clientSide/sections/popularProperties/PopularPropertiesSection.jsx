"use client";
import { popularPropertiesMock } from "./mock.js";
import Image from "next/image.js";

function handleGoToProperty(item) {
  alert("TODO");
}

export default function PopularPropertiesSection() {
  return (
    <div className="px-4 md:px-16 lg:px-32">
        <p className="text-3xl font-bold text-neutral-900 flex text-center justify-center p-10">
          POPULAR PROPERTIES
        </p>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
        {popularPropertiesMock.map((item) => {
          return (
            <div key={item.id} className="mb-10 mx-4">
              <Image
                src={item.photo}
                width="571"
                height="353"
                alt="building"
                onClick={(item) => handleGoToProperty(item)}
                className="hover:brightness-75 transition-full duration-500 hover:cursor-pointer pb-6"
              />
              <a
                onClick={(item) => handleGoToProperty(item)}
                className="text-xl md:text-2xl hover:cursor-pointer hover:text-blue-500 transition-full duration-500"
              >
                {item.title}
              </a>
              <div className="flex py-4 items-center">
                <a
                  onClick={(item) => handleGoToProperty(item)}
                  className="text-blue-500 hover:cursor-pointer hover:text-blue-800 transition-full duration-500"
                >
                  ${item.cost}/mon
                </a>
                <div className="w-1 h-auto bg-slate-200 mx-4"/>
                <p>{item.area} Sq. Ft.</p>
                <div className="w-1 h-auto bg-slate-200 mx-4"/>
                <p>{item.bedrooms} Bedrooms</p>
              </div>
              <p className="text-neutral-500">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
