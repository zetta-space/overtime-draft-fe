import DateSelector from "./ui/Dateselector";

const Form = () => {
  return (
    <form method="post" className="py-6">
      <div className="p-4">
        <div className="mb-4">
          <label
            htmlFor="employee"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Employee Name
            <span className="text-red-600 mx-1">*</span>
          </label>
          {/* <SelectBox /> */}
          <input className="form-control" type="text" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
              <span className="text-red-600 mx-1">*</span>
            </label>
            <select className="form-control">
              <option value={""}>select a category</option>
              <option value={"Casual"}>Casual</option>
              <option value={"Permanent"}>Permanent</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="payRate"
              className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rate
              <span className="text-red-600 mx-1">*</span>
            </label>
            <input
              className="form-control cursor-not-allowed bg-gray-50"
              type="text"
              aria-label="disabled input"
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="employee"
              className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date
              <span className="text-red-600 mx-1">*</span>
            </label>
            <DateSelector />
          </div>
          <div className="mb-4">
            <label
              htmlFor="employee"
              className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hours
              <span className="text-red-600 mx-1">*</span>
            </label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="employee"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Job
            <span className="text-red-600 mx-1">*</span>
          </label>
          <input className="form-control" type="text" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="employee"
              className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Division
              <span className="text-red-600 mx-1">*</span>
            </label>
            <select className="form-control">
              <option value={""}>select a category</option>
              <option value={"Casual"}>Casual</option>
              <option value={"Permanent"}>Permanent</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="employee"
              className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Field
              <span className="text-red-600 mx-1">*</span>
            </label>
            <select className="form-control">
              <option value={""}>select a category</option>
              <option value={"Casual"}>Casual</option>
              <option value={"Permanent"}>Permanent</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="employee"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Crop Type
            <span className="text-red-600 mx-1">*</span>
          </label>
          <select className="form-control">
            <option value={""}>select a category</option>
            <option value={"Casual"}>Casual</option>
            <option value={"Permanent"}>Permanent</option>
          </select>
        </div>
        <div className="mb-14">
          <label
            htmlFor="employee"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Work Type
            <span className="text-red-600 mx-1">*</span>
          </label>
          <select className="form-control">
            <option value={""}>select a category</option>
            <option value={"Casual"}>Casual</option>
            <option value={"Permanent"}>Permanent</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row w-[25%] bg-slate-200 space-x-3 justify-end items-center py-4 px-4 fixed bottom-0">
        <button type="reset" className="btn bg-slate-900 uppercase">
          Reset
        </button>
        <button type="submit" className="btn btn-success justify-center">
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
