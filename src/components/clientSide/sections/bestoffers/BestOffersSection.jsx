"use client";
import { bestOffersMock } from "./mock.js";

function handleSeeBestOffers() {
  alert("TODO");
}

export default function BestOffersSection() {
  return (
    <section className="bg-[url('/images/best-offers-bg-1807-526.png')]">
      <div className="flex flex-col items-center justify-center w-2/5 py-20 mx-auto">
        <h1 className="m-3 text-4xl text-center text-white">
          {bestOffersMock.title}
        </h1>
        <h2 className="m-3 text-xl text-center text-white">
          {bestOffersMock.subtitle}
        </h2>
        <p className="m-3 text-center text-white">{bestOffersMock.text}</p>
        <button
          className="px-10 py-3 m-3 duration-500 bg-white rounded-md hover:bg-blue-500 transition-full"
          onClick={handleSeeBestOffers}
        >
          READ MORE
        </button>
      </div>
    </section>
  );
}
