import { Link } from "react-router-dom";

const Table = () => {
  const id = 1;
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
          <tr className="tb-row">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Link to={`/employee/${id}`}>Apple MacBook Pro 17</Link>
            </th>
            <td className="px-6 py-4">113</td>
            <td className="px-6 py-4">AL_Rolling</td>
            <td className="px-6 py-4">FCAA</td>
            <td className="px-6 py-4">2hrs</td>
            <td className="px-6 py-4">$2999.35</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;
