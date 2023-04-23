import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Class(props) {
  const [selected, setSelected] = useState(true);
  const [generate, setgenerate] = useState("none");
  const [classes, setclasses] = useState("ECONOMY");
  const [classesNo, setclassesNo] = useState(1);
  const [children, setchildren] = useState(0);
  const [adult, setadult] = useState(1);

  function done() {
    setgenerate("none");
  }
  function show() {
    setgenerate("block");
  }
  function Economy() {
    setclasses("ECONOMY");
    setclassesNo(1);
    setgenerate("none");
  }
  function PremiumEconomy() {
    setclasses("PREMIUM ECONOMY");
    setclassesNo(2);
    setgenerate("none");
  }
  function BusinessClass() {
    setclasses("BUSINESS CLASS");
    setclassesNo(3);
    setgenerate("none");
  }
  function FirstClass() {
    setclasses("FIRST CLASS");
    setclassesNo(4);
    setgenerate("none");
  }

  // console.log(classesNo);
  props.setclasse(classesNo);
  props.setnameofclass(classes);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left down rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span
            onClick={() => show()}
            className="block truncate text-sm text-black py-1 font-sans font-bold"
          >
            {" "}
            <i class="fas fa-users text-blue-500"></i> &nbsp; {classes}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>

        <div
          style={{ display: generate }}
          className="absolute pl-0 w-full py-1 mt-1  text-base bg-white rounded-md shadow-lg max-h-auto z-50 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <div
            className="p-2 text-black cursor-pointer hover:bg-gray-100 "
            onClick={() => setclasses(() => Economy())}
          >
            {" "}
            <i class="fas fa-wheelchair text-blue-500"></i> &nbsp; ECONOMY
          </div>
          <div
            className="p-2 text-black cursor-pointer hover:bg-gray-100"
            onClick={() => setclasses(() => PremiumEconomy())}
          >
            <i class="fas fa-chair text-blue-500"></i> &nbsp; PREMIUM ECONOMY
          </div>
          <div
            className="p-2 text-black cursor-pointer hover:bg-gray-100"
            onClick={() => setclasses(() => BusinessClass())}
          >
            {" "}
            <i class="fas fa-couch text-blue-500"></i> &nbsp; BUSINESS CLASS
          </div>
          <div
            className="p-2 text-black cursor-pointer hover:bg-gray-100"
            onClick={() => setclasses(() => FirstClass())}
          >
            {" "}
            <i class="fas fa-couch text-blue-500"></i> &nbsp; FIRST CLASS
          </div>
        </div>
      </div>
    </Listbox>
  );
}
