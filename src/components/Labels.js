import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// Mapping color classes to user-friendly names
const labelsMapping = {
  indigo: "Work",
  gray: "Anniversary",
  green: "Task",
  blue: "Appointment",
  red: "Personal",
  purple: "Birthday",
};

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-3">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">
            {labelsMapping[lbl] || lbl} {/* Display user-friendly label */}
          </span>
        </label>
      ))}
    </React.Fragment>
  );
}
