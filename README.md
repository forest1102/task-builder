# Task Builder

**Task Builder** is a web application that allows you to manage tasks visually and enjoyably by progressing tasks as "building construction." As tasks progress, buildings are completed, and the entire project expands like a city.

---

## Overview

Task Builder aims to:

- Visualize task progress as "building construction"
- Enjoy task management with a sense of urban development
- Check progress with a freely configurable layout

---

## Features

### 1. **Task Management**

- **Add Tasks**  
  Set the task name and initial state (not started).
- **Edit Tasks**  
  Update task progress in three stages: "Not Started," "In Progress," and "Completed."

### 2. **Building Construction**

- Buildings change according to task progress.
  - Not Started: Semi-transparent building
  - In Progress: "Under Construction" icon on a semi-transparent building
  - Completed: Completed building

### 3. **Drag & Drop**

- Freely move buildings and layout the city as you like.
- Retain the position of placed buildings.

### 4. **City Layout**

- Buildings are arranged in a grid, representing the entire ongoing project as a city.
- Users can customize the city's layout.

### 5. **Data Storage**

- Task information and building positions are saved in the browser, retaining the state for the next access.

---

## Usage

1. **Add Tasks**  
   Create a new task from the menu. Enter the task name and click save.

2. **Progress Tasks**  
   Click on buildings to update progress to "In Progress" or "Completed." Buildings change according to progress.

3. **Place Buildings**  
   Drag and drop buildings within the city to place them where you like.

4. **Check Project Progress**  
   View the entire city to visually grasp the progress of tasks.

---

## Libraries Used

- **[React](https://reactjs.org/)**  
  Used to build the user interface (task addition and editing menu).

- **[Phaser.js](https://phaser.io/)**  
  Used to render buildings corresponding to tasks and implement drag & drop functionality.

- **[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)**  
  Used to save data serverlessly and retain task and building position information.

- **[UUID](https://github.com/uuidjs/uuid)**  
  Used to assign unique IDs to each task.

- **[Tailwind CSS](https://tailwindcss.com/)**  
  Used to streamline styling.

---

## Future Enhancements (Planned)

- **City Theme Change**  
  Customize the appearance of the city and building designs.
- **Deadline Timer**  
  Set deadlines for tasks and manage progress.
- **City Sharing Feature**  
  Share the city with other users for collaboration.

---

## Notes

- This app does not use a server and saves data in the browser's local storage. Therefore, data will not be carried over if you change devices.
- Recommended browsers: Latest versions of Chrome, Firefox.

---
