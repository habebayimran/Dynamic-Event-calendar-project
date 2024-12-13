# Dynamic Event Calendar Application

## **Overview**

This project is a **Dynamic Event Calendar Application** built with React.js. The application features a fully functional calendar with event management capabilities, designed to deliver a clean and intuitive user experience.

---

## **Inspiration**

I made this project by cloning the idea of Google Calendar Application. It got same functionalities , UI and filters like Google Calendar.

## **Features**

### **Core Features**

1. **Calendar View**:
   - Displays a calendar grid for the current month.
   - Includes "Previous" and "Next" buttons to navigate between months seamlessly.
   - Also includes a Sidebar which contains a small calendar which correlates with the big displayed one for quick navigation to any specific date.
   - Sidebar also contains information about the added labels and events and also provides a small form for exporting month-wise events

2. **Event Management**:
   - Users can add events by clicking on a specific day.
   - Users can also add events by selecting a day in small calendar present in sidebar and clicking on Create button after selecting the day
   - Events include:
     - Event Name
     - Event Time
     - Optional description
     - Eent Type 
   - Edit Events: Modify existing events seamlessly.
   - Delete Events: Remove events with a single action.
   - Types of Events include:
     - Work
     - Personal
     - Birthday
     - Anniversary 
     - Tasks
     - Appointments


3. **Event List**:
   - Displays a list of all events for the selected day in the calendar grid.

4. **Data Persistence**:
   - All events are saved to **localStorage**, ensuring data is retained across browser sessions.

5. **UI Design**:
   - Developed with **Tailwind CSS** and Shadcn UI for a clean, modern, and responsive design.
   - Dynamic Calendar Header: Displays the current month and year, with navigation controls to move between months or return to today.
   - Day Highlights:
    - Current Day: Clearly highlighted with a distinct style.
    - Selected Day: Visually distinct from other days for better focus.

6. **Complex Logic**:
   - Automatically adjust event times based on the user's time zone.
   - Handles month transitions automatically (e.g., from Jan 31 to Feb 1).
   - Allows filtering events by labels.
   - Focused Views: Users can hide non-essential labels to focus on specific event types, such as work-related events during work hours.
   - Dynamic Calendar Management: Toggle labels on and off dynamically without affecting the actual event data.
   - Customization: Combine multiple label views to suit specific needs, like viewing both "Work" and "Personal" events together.

---

### **Bonus Features**

- Export events for a specific month as a **JSON** file.
- Color coding for events based on categories (e.g., work, personal, others).
   Implemented Colours with its Events:
   - Indigo: "Work"
   - Gray: "Anniversary"
   - Green: "Task"
   - Blue: "Appointment"
   - Red: "Personal"
   - Purple: "Birthday"
- While drag-and-drop rescheduling was not implemented, users can easily manage events through the intuitive modal interface.


## **Installation and Setup**

## **Prerequisites**
    Node.js and npm installed on your system.

## **Steps**

1. **Download the Repository or Clone the Repository**:
   - Download the project zip file from the GitHub repository.
   - Cloning commands
   ```bash
   git clone https://github.com/habebayimran/Dynamic-Event-calendar-project.git
   cd Dynamic-Event-calendar
   ```
   

2. **Install Dependencies**:
   ```bash
   npm install --force
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to use the application.

---

## **How to Use**

1. **Navigate the Calendar**:
   - Use the "Previous" and "Next" buttons to switch between months.

2. **Manage Events**:
   - Click on a day to open the event modal.
   - Add new events by filling in the event name, an optional description and choosing event type.
   - Also Add events by selecting a day in small calendar present in sidebar and clicking on Create button after selecting the day.
   - Edit or delete existing events from the modal.

3. **Filter Events**:
   - Use labels to filter events by categories.

4. **Export Events**:
   - Export all events for a specific month as a JSON file by accessing it in sidebar.

---

## **Deployment**

The application is deployed on **Netlify**. You can access it here:

https://dynamic-calender-googlecalenderclone.netlify.app

---

## **Project Structure**

```
├── public
│   ├── index.html
├── src
│   ├── assests
│   ├── components
│   │   ├── CalendarHeader.js
│   │   ├── CreateEventButton.js
│   │   ├── Day.js
│   │   ├── EventModal.js
│   │   ├── Labels.js
│   │   ├── Month.js
│   │   ├── Sidebar.js
│   │   ├── SmallCalendar.js
│   ├── context
│   │   ├── ContextWrapper.js
│   │   ├── GlobalContext.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── util.js
├── package.json
└── tailwind.config.js
```

---

## **Technologies Used**

- **React.js**: Functional components and hooks for dynamic UI and state management.
- **Tailwind CSS**: Clean, modern, and responsive design.
- **LocalStorage**: For data persistence.
- **JavaScript**: Custom calendar logic and event handling.

---

## **Future Improvements**

- Implement drag-and-drop functionality for rescheduling events.
- Integrate Advanced Shadcn UI  Components for enhanced component styling.

---

## **Links**

- **GitHub Repository**: https://github.com/habebayimran/Dynamic-Event-calendar-project.git
- **Live Deployment**: https://dynamic-calender-googlecalenderclone.netlify.app

---

Thank you for reviewing my project! Please feel free to reach out if you have any questions or feedback.

