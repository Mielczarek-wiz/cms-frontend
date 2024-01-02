"use client";
import Image from "next/image.js";

function handleSeeBestOffers() {
    alert("TODO")
}

export default function BestOffersSection() {
  return (
    <div className="bg-[url('/images/best-offers-bg-1807-526.png')]">
      <div className="py-20 mx-auto flex flex-col justify-center items-center w-2/5">
        <p className="text-white text-4xl m-3">BEST OFFERS</p>
        <p className="text-white text-xl m-3">of September</p>
        <p className="text-white m-3 text-center">
          With a variety of accountants available at our company, you can always
          choose one that fits your corporate requirements.
        </p>
        <button className="m-3 bg-white py-3 px-10 rounded-md hover:bg-blue-500 transition-full duration-500" onClick = {handleSeeBestOffers}>READ MORE</button>
      </div>
    </div>
  );
}
