import { convertToImage } from "@/components/modules/convertToImage.js";

export default function BestOffersSection({ section }) {
  return (
    <section
      style={{
        backgroundImage: `url(${convertToImage(section.image)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center w-2/5 py-20 mx-auto">
        <h1 className="m-3 text-4xl text-center text-white">{section.title}</h1>
        <h2 className="m-3 text-xl text-center text-white">
          {section.subtitle}
        </h2>
        <p className="m-3 text-center text-white">{section.text}</p>
        <button className="px-10 py-3 m-3 duration-500 bg-white rounded-md hover:bg-blue-500 transition-full">
          READ MORE
        </button>
      </div>
    </section>
  );
}
