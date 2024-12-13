import React, { useState, useEffect, useReducer, useMemo } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

// Reducer to manage saved events
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error("Unsupported action type");
  }
}

// Initialize events from localStorage
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  return storageEvents ? JSON.parse(storageEvents) : [];
}

export default function ContextWrapper({ children }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents);

  // Filtered events based on selected labels
  const filteredEvents = useMemo(() => {
    const selectedLabels = labels.filter((lbl) => lbl.checked).map((lbl) => lbl.label);
    return savedEvents.filter((evt) => selectedLabels.includes(evt.label));
  }, [savedEvents, labels]);

  // Save events to localStorage
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  // Update labels when saved events change
  useEffect(() => {
    setLabels((prevLabels) => {
      const uniqueLabels = [...new Set(savedEvents.map((evt) => evt.label))];
      return uniqueLabels.map((label) => {
        const existingLabel = prevLabels.find((lbl) => lbl.label === label);
        return { label, checked: existingLabel ? existingLabel.checked : true };
      });
    });
  }, [savedEvents]);

  // Sync main calendar with small calendar
  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  // Reset selected event when modal closes
  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  // Update label state
  function updateLabel(updatedLabel) {
    setLabels((labels) =>
      labels.map((lbl) => (lbl.label === updatedLabel.label ? updatedLabel : lbl))
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
