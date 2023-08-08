import { Outlet } from "react-router-dom";
import { HomeIcon, ClockIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

const Root = () => {
  return (
    <div className="flex flex-row w-full">
      <nav className="w-[270px] flex flex-col h-screen overflow-hidden border-r-[1.125px] border-r-slate-200">
        <p className="my-2 py-5 border-slate-300 border-b-[1px] text-xl text-center uppercase">
          Overtime <b className="text-green-700">Draft</b>
        </p>
        <div className="flex flex-col justify-center flex-grow">
          <span className="nav-item">
            <HomeIcon className="w-5 h-5" fill="#334155" />
            <h2 className="font-semibold text-base text-slate-900 hover:text-white">Home</h2>
          </span>
          <span className="nav-item">
            <ClockIcon className="w-5 h-5" fill="#334155"/>
            <h2 className="font-semibold text-base text-slate-900 hover:text-white">
              History
            </h2>
          </span>
          <span className="nav-item">
            <Cog6ToothIcon className="w-5 h-5" fill="#334155"/>
            <h2 className="font-semibold text-base text-slate-900 hover:text-white">
              Settings
            </h2>
          </span>
        </div>
        <div className="flex flex-col flex-grow justify-end">
          <div className="px-3 pb-4 bg-slate-50 border-t-2 pt-2 space-y-1">
            <p className="text-sm font-medium capitalize text-slate-500">
              powered by
            </p>
            <p className="text-xl uppercase font-bold">
              zetta <small className="lowercase text-xs">.tech</small>
            </p>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
