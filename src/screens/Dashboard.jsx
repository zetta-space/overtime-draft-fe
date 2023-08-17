import {
  BarsArrowDownIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
// import Profile from "../components/ui/Profile";
import Table from "../components/ui/Table";
import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider";
import { UserContext } from "../state/UserContext";
import { OvertimeList } from "../api/overtime/OvertimeList";
import Spinner from "../components/ui/Spinner";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [list, setList] = useState(null);
  const TOKEN = "86|jV4r5Ta6H3qvpqR2bvthblLGwTFLFcSJsl8iPYq6";

  useEffect(() => {
    const overtime = OvertimeList(10, 0, TOKEN);
    overtime.then(({ data }) => {
      setList(data);
    });

  return (
    <div className="flex flex-row w-full">
      <div className="bg-dashboard w-full">
        <div className="my-2 mx-4 flex flex-row justify-between items-start">
          <article className="flex flex-col space-y-1 pt-4">
            <h2 className="font-semibold text-2xl">Dashboard</h2>
            <h5 className="font-normal text-base text-slate-500">
              Hello, Thomas. Welcome back
            </h5>
          </article>
          <div className="flex flex-row justify-end items-center gap-4 w-1/3">
            <span>
              <BellIcon className="w-6 h-auto text-slate-500" />
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-md p-5 mx-4 relative top-10 border-[0.75px] border-slate-300">
          <div className="card-header">
            <h3 className="capitalize font-semibold text-lg">
              All overtime records
            </h3>
            <div className="flex flex-row justify-center items-center flex-grow">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="text-slate-400 w-4 h-auto" />
                </span>
                <input
                  type="search"
                  className="form-control w-[30vw] pl-10"
                  placeholder="Search Employee, Job, Category, Division"
                />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <button
                type="button"
                className="mx-6 py-1.5 px-5 text-sm font-medium text-gray-600 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-800 focus:z-10 focus:ring-2 focus:ring-green-200"
              >
                <BarsArrowDownIcon className="flex items-center w-6 h-auto text-slate-500 hover:text-white" />
              </button>
            </div>
            <div className="flex flex-row flex-grow-0 justify-end gap-4">
              <Slider heading={"Add Overtime Record"} />
            </div>
          </div>
          <section className="w-full my-4 flex flex-col">
            {list === null ? <Spinner /> : <Table overtimeRecordList={list} />}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
