import { convertToImage } from "@/components/modules/convertToImage.js";
import Image from "next/image.js";

export default function PopularPropertiesSection({ section }) {
  return (
    <section className="px-4 md:px-16 lg:px-32">
      <h1 className="flex justify-center p-10 text-3xl font-bold text-center text-neutral-900">
        {section.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
        {section.infoboxes.map((item) => {
          return (
            <div key={item.id} className="mx-4 mb-10">
              <Image
                src={convertToImage(item.image)}
                width={570}
                height={350}
                alt="building"
                className="pb-6 duration-500 hover:brightness-75 transition-full hover:cursor-pointer"
              />
              <p className="text-xl duration-500 md:text-2xl hover:cursor-pointer hover:text-blue-500 transition-full">
                {item.information}
              </p>
              <p className="text-neutral-500">{item.subinformation}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
