import { convertToImage } from "@/components/modules/convertToImage.js";

export default function CategoriesSection({ section }) {
  return (
    <section className="py-4 mx-0 md:mx-32">
      <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
        <h1 className="flex justify-center pb-4 text-3xl text-center text-neutral-900">
          {section.title}
        </h1>
        <p className="flex justify-center text-center text-neutral-400">
          {section.text}
        </p>
      </div>
      <div className="grid justify-center my-8 gird-col2-1 md:grid-cols-2 lg:grid-cols-4">
        {section.infoboxes.map((item) => {
          return (
            <div key={item.id} className="flex flex-col p-2 h-fit w-fit">
              <div
                className="flex flex-row items-center justify-center w-64 p-4 duration-500 rounded-md h-72 hover:brightness-75 transition-color hover:cursor-pointer"
                style={{
                  backgroundImage: `url(${convertToImage(item.image)})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <p className="px-1 duration-500 text-neutral-900 hover:text-blue-500 transition-color hover:cursor-pointer">
                {item.information}
              </p>
            </div>
          );
        })}
      </div>
      <button className="flex px-8 py-3 mx-auto my-4 text-white align-middle transition-colors duration-100 bg-blue-500 rounded-md hover:bg-neutral-800">
        VIEW ALL PROPERTIES
      </button>
    </section>
  );
}
