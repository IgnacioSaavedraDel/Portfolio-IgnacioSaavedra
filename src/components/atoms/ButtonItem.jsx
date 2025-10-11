import React from "react";

const ButtonItem = ({ label, active }) => {
  const baseClasses =
    "px-8 py-2 rounded-full shadow-md shadow-gray-200 font-black text-lg transition";
  const activeClasses = "text-gray-100 bg-gray-500";
  const inactiveClasses =
    "text-gray-400 bg-gray-50 hover:bg-green-100 hover:shadow-gray-300 hover:text-gray-600";

  return (
    <li
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
    >
      {label}
    </li>
  );
};

export default ButtonItem;
