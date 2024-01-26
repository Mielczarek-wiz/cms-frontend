"use client";
import { popularPropertiesMock } from "./mock.js";
import Image from "next/image.js";

function handleGoToProperty(item) {
  alert("TODO");
}

export default function PopularPropertiesSection() {
  return (
    <section className="px-4 md:px-16 lg:px-32">
      <h1 className="flex justify-center p-10 text-3xl font-bold text-center text-neutral-900">
        POPULAR PROPERTIES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
        {popularPropertiesMock.map((item) => {
          return (
            <div key={item.id} className="mx-4 mb-10">
              <Image
                src={item.photo}
                width="571"
                height="353"
                alt="building"
                onClick={(item) => handleGoToProperty(item)}
                className="pb-6 duration-500 hover:brightness-75 transition-full hover:cursor-pointer"
              />
              <a
                onClick={(item) => handleGoToProperty(item)}
                className="text-xl duration-500 md:text-2xl hover:cursor-pointer hover:text-blue-500 transition-full"
              >
                {item.title}
              </a>
              <div className="flex items-center py-4">
                <a
                  onClick={(item) => handleGoToProperty(item)}
                  className="text-blue-500 duration-500 hover:cursor-pointer hover:text-blue-800 transition-full"
                >
                  ${item.cost}/mon
                </a>
                <div className="w-1 h-auto mx-4 bg-slate-200" />
                <p>{item.area} Sq. Ft.</p>
                <div className="w-1 h-auto mx-4 bg-slate-200" />
                <p>{item.bedrooms} Bedrooms</p>
              </div>
              <p className="text-neutral-500">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
