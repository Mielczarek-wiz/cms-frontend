import { ourTeamMock } from "./mock.js";
import Image from "next/image.js";

export default function OurTeamSection() {
  const maxItems = 4;
  let index = 0;
  return (
    <div className="flex mx-0 md:mx-32 py-4">
      {ourTeamMock.map((item) => {
        index += 1;
        return index <= maxItems ? 
        <div key={item.id} className="px-16 w-1/2">
            <Image src={item.photo} width="170" height="172" alt="teammate" className="rounded flex align-middle"/>
            <div className="ml-4 pr-4">
                <p className="text-xl text-neutral-900">{item.name}</p>
                <p className="text-neutral-900">{item.job}</p>
                <div className="flex py-4">
                    <Image src="phone.svg" alt="phone" width="20" height="20"/>
                    <p className="pl-4">{item.phone}</p>
                </div>
                <p className="text-neutral-600">{item.description}</p>
            </div>
        </div> 
        : null;
      })}
    </div>
  );
}
