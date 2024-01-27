import { convertToImage } from "@/components/modules/convertToImage.js";
import Image from "next/image.js";

export default function OurTeamSection({ section }) {
  const maxItems = 4;
  return (
    <section className="bg-slate-100">
      <h1 className="flex justify-center text-3xl text-center text-neutral-900">
        {section.title}
      </h1>
      <div className="grid grid-cols-1 py-4 mx-0 md:grid-cols-2 md:mx-32">
        {section.infoboxes.map((item, index) => {
          return index < maxItems ? (
            <div key={item.id} className="flex items-start p-8 space-x-4">
              <Image
                src={convertToImage(item.image)}
                width="170"
                height="172"
                alt="teammate"
                className="flex align-middle rounded-md"
              />
              <div>
                <p className="mb-4 text-xl transition-all duration-500 text-neutral-900 hover:text-blue-500">
                  {item.information}
                </p>
                <p className="text-neutral-600">{item.subinformation}</p>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
}
