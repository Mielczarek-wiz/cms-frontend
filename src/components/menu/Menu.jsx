import Link from "next/link";
import { routes } from "./routes";

export default function Menu({className= ""}) {
  return (
    <menu className="w-full bg-transparent">
      <nav className="w-full">
        <ul className={className}>
          {routes.map((route) => (
            route.isVisible ? 
            <li key={route.name} className="flex flex-row items-center justify-start w-full p-4 text-lg text-white lg:w-fit hover:bg-blue-500 hover:text-white lg:hover:text-gray-500 lg:hover:bg-transparent">
              <Link href={route.path}>{route.name}</Link>
            </li>
            :
            null
          ))}
        </ul>
      </nav>
    </menu>
  );
}
