"use client";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function ManageIcons() {
  const todo = (what) => {
    console.log("This will do ..", what);
  };
  return (
    <div className="flex flex-row items-center justify-start px-6 py-4 space-x-4 dark:text-white">
      <button onClick={() => todo("edit")}>
        <PencilSquareIcon className="w-6 h-6 text-blue-500 hover:cursor-pointer" />
      </button>
      <button onClick={() => todo("delete")}>
        <TrashIcon className="w-6 h-6 text-red-500 hover:cursor-pointer" />
      </button>
    </div>
  );
}
