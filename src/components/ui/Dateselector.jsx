import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import DatePicker from "tailwind-datepicker-react";

const options = {
  title: "",
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  maxDate: new Date("2024-01-01"),
  minDate: new Date("1999-01-01"),
  theme: {
    background: "bg-slate-50 text-black border-[1.5px] border-slate-400",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "text-slate-800 text-sm",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected:
      "bg-green-500 rounded-full border-2 ring-2 ring-emerald-300 hover:bg-slate-800",
  },
  icons: {
    prev: () => (
      <span>
        <ArrowSmallLeftIcon className="w-5 h-auto text-slate-900" />
      </span>
    ),
    next: () => (
      <span>
        <ArrowSmallRightIcon className="w-5 h-auto text-slate-900" />
      </span>
    ),
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date("2022-01-01"),
  language: "en",
};

const DateSelector = () => {
  const [show, setShow] = useState(false);

  const handleChange = (date) => {
    console.log(date);
  };
  const handleClose = (state) => {
    return setShow(state);
  };

  return (
    <div>
      <DatePicker
        options={options}
        setShow={handleClose}
        onChange={handleChange}
        show={show}
      />
    </div>
  );
};

export default DateSelector;
