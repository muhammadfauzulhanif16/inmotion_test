import { useState } from "react";

export const List = ({ content, status, isChecked }) => {
  const [checked, setChecked] = useState(false),
    handleClickChecked = () => {
      setChecked(!checked);
    };

  return (
    <li className="sm:flex justify-between mb-4">
      <div className="flex mb-2 sm:mb-0">
        <i
          onClick={handleClickChecked}
          class={`bx bx-sm cursor-pointer ${
            checked || isChecked
              ? "bxs-check-circle text-cyan-300"
              : "bx-circle text-slate-400"
          }`}
        ></i>
        <p className="ml-4">{content}</p>
      </div>

      <div className="sm:ml-4">
        <div
          className={`w-max justify-self-end rounded-full pt-1 pb-2 px-5 leading-none font-medium ${
            status === "Approved"
              ? "bg-green-200 text-green-700"
              : status === "In Progress"
              ? "bg-blue-200 text-blue-700"
              : status === "In Review"
              ? "bg-orange-200 text-orange-700"
              : status === "Waiting"
              ? "bg-gray-200 text-gray-700"
              : ""
          }`}
        >
          {status}
        </div>
      </div>
    </li>
  );
};
