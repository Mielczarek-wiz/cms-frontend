import { infoboxesMock } from "./mock.js";
import Image from "next/image.js";

export default function InfoboxesSection() {
  return (
    <div className="bg-slate-100">
      <div className="py-10 px-8 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
        {infoboxesMock.map((item) => {
          return (
            <div key={item.id} className="flex items-start mx-10 py-6">
              <Image
                src={item.svg}
                width="30"
                height="30"
                alt="svg"
                className="mr-2 md:mr-4 lg:mr-6"
              />
              <div className="flex flex-col">
                <p className="text-neutral-900 text-2xl mb-4">{item.title}</p>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
