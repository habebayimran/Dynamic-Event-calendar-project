import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = [
  { color: "indigo", label: "Work" },
  { color: "gray", label: "Anniversary" },
  { color: "green", label: "Task" },
  { color: "blue", label: "Appointment" },
  { color: "red", label: "Personal" },
  { color: "purple", label: "Birthday" }
];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent ? labelsClasses.find((lbl) => lbl.color === selectedEvent.label) : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel.color,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now()
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">drag_handle</span>
          <div>Add Events</div>
          <div>
            {selectedEvent && (
              <span
              onClick={() => {
                dispatchCalEvent({ type: "delete", payload: selectedEvent });
                setShowEventModal(false);
                <div>Add Events</div>
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400"> close </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            {/* <div></div> */}
            <span className="material-icons-outlined text-gray-400"> title </span>
            <input
              type="text"
              name="title"
              placeholder="Add a title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="pt-3 border-0 text-gray-600 text-l font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400"> schedule </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400"> description </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400"> bookmark_border </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lbl, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lbl)}
                  className={`bg-${lbl.color}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel.color === lbl.color && (
                    <span className="material-icons-outlined text-white text-sm"> check </span>
                  )}
                </span>
              ))}
            </div>
            <span className="material-icons-outlined text-gray-400">apps</span>
            <div className="mt-2 text-gray-600">
              {labelsClasses.map((lbl, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <span className={`bg-${lbl.color}-500 w-4 h-4 rounded-full`}></span>
                  <span className="text-sm">{lbl.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

