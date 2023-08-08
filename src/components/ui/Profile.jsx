/* eslint-disable react/prop-types */
const Profile = () => {
  // const { username, name, email } = userData;
  const ADMIN = "Admin";

  return (
    <div>
      <button
        data-popover-target="popover-user-profile"
        data-popover-placement="bottom"
        type="button"
      >
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${ADMIN}`}
          alt="Bordered avatar"
        />
      </button>

      <div
        data-popover
        id="popover-user-profile"
        role="tooltip"
        className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5"
              >
                Sign Out
              </button>
            </div>
          </div>
          <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            name
          </p>
          <p className="mb-3 text-sm font-normal">@username</p>
          <p className="mb-4 text-sm">
            Manager of Hayleays
            <br />
            <span className="text-blue-600 dark:text-blue-500">email</span>.
          </p>
          <ul className="flex text-sm">
            <li className="mr-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">
                  799
                </span>
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">
                  3,758
                </span>
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
};

export default Profile;
