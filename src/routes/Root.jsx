import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <div className="flex flex-row w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Root;
