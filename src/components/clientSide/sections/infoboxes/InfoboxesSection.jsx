import { infoboxesMock } from "./mock.js";
import Image from "next/image.js";

export default function InfoboxesSection() {
  return (
    <section className="bg-slate-100">
      <div className="grid grid-cols-1 px-8 py-10 md:px-16 lg:px-32 md:grid-cols-2 lg:grid-cols-3 place-content-center">
        {infoboxesMock.map((item) => {
          return (
            <div key={item.id} className="flex items-start py-6 mx-10">
              <Image
                src={item.svg}
                width="30"
                height="30"
                alt="svg"
                className="mr-2 md:mr-4 lg:mr-6"
              />
              <div className="flex flex-col">
                <p className="mb-4 text-2xl text-neutral-900">{item.title}</p>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
