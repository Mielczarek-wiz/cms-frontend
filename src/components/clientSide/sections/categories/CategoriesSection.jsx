"use client";

import { categoriesMock } from "./mock.js";
import Image from "next/image.js";

function handleRedirectToProperty(item) {
  alert("TODO");
}

function handleViewAllPropertiesButton() {
  alert("TODO");
}

export default function CategoriesSection() {
  return (
    <section className="py-4 mx-0 md:mx-32">
      <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
        <p className="flex justify-center pb-4 text-3xl text-center text-neutral-900">
          RESIDENTIAL PROPERTY CATEGORIES
        </p>
        <p className="flex justify-center text-center text-neutral-400">
          At our agency, we work with various types of residential real estate
          property. You can find out more about our properties by browsing our
          website. {/*replace later*/}
        </p>
      </div>
      <div className="grid justify-center my-8 gird-col2-1 md:grid-cols-2 lg:grid-cols-4">
        {categoriesMock.map((item) => {
          return (
            <div key={item.id} className="flex flex-col">
              <Image
                src={item.photo}
                width="270"
                height="300"
                alt="property"
                className="p-2 duration-500 rounded-md hover:brightness-75 transition-color hover:cursor-pointer"
                onClick={() => handleRedirectToProperty(item)}
              />
              <a
                onClick={() => handleRedirectToProperty(item)}
                className="duration-500 text-neutral-900 hover:text-blue-500 transition-color hover:cursor-pointer"
              >
                {item.text}
              </a>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleViewAllPropertiesButton}
        className="flex px-8 py-3 mx-auto my-4 text-white align-middle transition-colors duration-100 bg-blue-500 rounded-md hover:bg-neutral-800"
      >
        VIEW ALL PROPERTIES
      </button>
    </section>
  );
}
