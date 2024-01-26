"use client";

import { contactMock } from "./mock.js";
import Image from "next/image.js";

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 mx-8 my-10 md:grid-cols-3 place-items-center md:mx-16 lg:mx-32">
      {contactMock.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center mb-10 md:mb-0"
          >
            <Image
              src={item.iconRef}
              width="30"
              height="30"
              alt="icon"
              className="flex pb-4"
            />
            <p className="text-neutral-500">{item.information}</p>
            <p className="whitespace-pre text-neutral-500">
              {item.subinformation !== null && item.subinformation !== undefined
                ? item.subinformation
                : " "}
            </p>
          </div>
        );
      })}
    </section>
  );
}
