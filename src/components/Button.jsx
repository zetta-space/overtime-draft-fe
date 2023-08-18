// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = () => {
  return (
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
  );
};

export default Button;
