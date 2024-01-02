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
    <div className="mx-0 md:mx-32 py-4">
      <div className="w-1/2 flex flex-col justify-center items-center mx-auto">
        <p className="text-3xl text-neutral-900 flex text-center justify-center pb-4">
          RESIDENTIAL PROPERTY CATEGORIES
        </p>
        <p className="text-neutral-400 flex text-center justify-center">
          At our agency, we work with various types of residential real estate
          property. You can find out more about our properties by browsing our
          website. {/*replace later*/}
        </p>
      </div>
      <div className="grid gird-col2-1 md:grid-cols-2 lg:grid-cols-4 justify-center my-8">
        {categoriesMock.map((item) => {
          return (
            <div key={item.id} className="flex flex-col">
              <Image
                src={item.photo}
                width="270"
                height="300"
                alt="property"
                className="rounded-md p-2 hover:brightness-75 transition-full duration-500 hover:cursor-pointer"
                onClick={() => handleRedirectToProperty(item)}
              />
              <a
                onClick={() => handleRedirectToProperty(item)}
                className="text-neutral-900 hover:text-blue-500 transition-full duration-500 hover:cursor-pointer"
              >
                {item.text}
              </a>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => handleViewAllPropertiesButton()}
        className="bg-blue-500 hover:bg-neutral-800 text-white my-4 mx-auto py-3 px-8 rounded-md flex align-middle"
      >
        VIEW ALL PROPERTIES
      </button>
    </div>
  );
}
