import { generalLayoutMock } from "./mock";

export default function Footer() {
  return (
    <footer className="bg-slate-800">
      <div className="">
          {generalLayoutMock.map((item) => {
            return item.key === "aboutUsTitle" ?
            <p className="text-white font-bold">
                {item.value}
            </p>
            :
            <></>
          })}
          {generalLayoutMock.map((item) => {
            return item.key === "aboutUsText" ?
            <p className="text-gray-500 mt-6">
                {item.value}
            </p>
            :
            <></>
          })}
      </div>
    </footer>
  );
}
