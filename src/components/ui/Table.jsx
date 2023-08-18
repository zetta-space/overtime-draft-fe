/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Button";

const Table = ({ overtimeRecordList }) => {
  const { data } = overtimeRecordList;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="tb-head">
          <tr>
            <th scope="col" className="px-6 py-3">
              employee number
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              job
            </th>
            <th scope="col" className="px-6 py-3">
              date
            </th>
            <th scope="col" className="px-6 py-3">
              hours
            </th>
            <th scope="col" className="px-6 py-3">
              total
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              id,
              employee_id,
              job,
              name,
              worked_at,
              total,
              hours_in_mins,
            }) => {
              return (
                <tr className="tb-row" key={id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link to={`/employee/${id}`}>{name}</Link>
                  </th>
                  <td className="px-6 py-4">{employee_id}</td>
                  <td className="px-6 py-4">{job}</td>
                  <td className="px-6 py-4">{worked_at}</td>
                  <td className="px-6 py-4">{hours_in_mins} mins</td>
                  <td className="px-6 py-4">Rs. {total}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      data-drawer-target="drawer-right"
                      data-drawer-show="drawer-right"
                      data-drawer-placement="right"
                      aria-controls="drawer-right"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
