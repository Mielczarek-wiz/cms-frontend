import { convertToImage } from "@/components/modules/convertToImage.js";
import Image from "next/image.js";

export default function WhyPeopleChooseUsSection({ section }) {
  return (
    <section className="px-8 py-10 bg-slate-100 md:px-16 lg:px-32">
      <div className="flex flex-col items-center justify-center w-1/2 pb-12 mx-auto text-center">
        <h1 className="pb-6 text-4xl">{section.title}</h1>
        <p className="font-thin text-neutral-500">{section.text}</p>
      </div>
      <div className="flex justify-between">
        {section.infoboxes.map((item) => {
          return (
            <div key={item.id} className="flex flex-col items-center mx-20">
              <Image
                src={convertToImage(item.image)}
                width="30"
                height="30"
                alt="icon"
                className="flex pb-4"
              />
              <p className="pb-4 text-5xl text-neutral-800">
                {item.subinformation}
              </p>
              <p className="whitespace-pre text-neutral-500">
                {item.information !== null && item.information !== undefined
                  ? item.information
                  : " "}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
