import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";

export default function Sidebar() {
  const { savedEvents } = useContext(GlobalContext);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleExport = () => {
    const eventsForMonth = savedEvents.filter(
      (evt) =>
        new Date(evt.day).getMonth() === selectedMonth &&
        new Date(evt.day).getFullYear() === selectedYear
    );

    const fileData = JSON.stringify(eventsForMonth, null, 2);
    const blob = new Blob([fileData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = `events_${selectedYear}_${selectedMonth + 1}.json`;
    link.href = url;
    link.click();
  };

  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
      <br></br>
      <div className="mb-4">
        <label htmlFor="monthSelect" className="block mb-2 font-semibold">
          Choose Month:
        </label>
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          className="border rounded p-2 w-full"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="yearInput" className="block mb-2 font-semibold">
          Enter Year:
        </label>
        <input
          id="yearInput"
          type="number"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          className="border rounded p-2 w-full"
          min="1900"
          max="2100"
        />
      </div>
      <button
        onClick={handleExport}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
      >
        Export Events
      </button>
    </aside>
  );
}
