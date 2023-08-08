import { Link } from "react-router-dom";
import {ArrowLeftIcon} from "@heroicons/react/24/outline"

const Employee = () => {
  return (
    <section className="flex flex-col w-full gap-3">
      <nav className="flex flex-row items-center justify-start">
        <Link className="p-3 rounded-full bg-white">
          <ArrowLeftIcon/>
        </Link>
        <p>Employee details</p>
      </nav>
      <div className="flex flex-col bg-white px-4 py-3 border-[1px] border-slate-200"></div>
      <div></div>
    </section>
  );
};

export default Employee;
