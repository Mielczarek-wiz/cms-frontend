"use client";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function AddButton({ setPopUp }) {
  return (
    <>
      <button
        className="flex flex-row items-center justify-start px-4 py-2 m-2 text-white bg-gray-700 rounded shadow w-fit h-fit hover:bg-gray-900"
        onClick={() => setPopUp({ item: null, isOpen: true })}
      >
        <PlusCircleIcon className="w-6 h-6 text-green-500" />{" "}
        <span>Add new</span>
      </button>
    </>
  );
}
