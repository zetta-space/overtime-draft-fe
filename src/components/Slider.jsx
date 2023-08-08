/* eslint-disable react/prop-types */
import SelectBox from "./ui/SelectBox";
import Form from "./Form";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Slider = ({ heading }) => {
  return (
    <>
      <div className="text-center">
        <button
          className="btn-success flex items-center gap-2"
          type="button"
          data-drawer-target="drawer-right"
          data-drawer-show="drawer-right"
          data-drawer-placement="right"
          aria-controls="drawer-right"
        >
          <PlusIcon className="w-4 h-auto text-white" />
          add record
        </button>
      </div>
      <div
        id="drawer-right"
        className="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-96 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <div className="border-b-[1px] border-b-slate-200 p-4">
          <h5
            id="drawer-right-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500"
          >
            {heading}
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-right"
            aria-controls="drawer-right"
            className="text-gray-900 bg-transparent border-slate-200 border-[1px] hover:bg-gray-900 hover:text-white rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <XMarkIcon className="w-5 h-5 text-slate-400"/>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <Form />
      </div>
    </>
  );
};

export default Slider;
