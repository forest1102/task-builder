# Task Builder

**Task Builder** is a creative visualization tool that transforms ordinary task management into an artistic urban development experience. Watch as your tasks materialize into a living, breathing cityscape where each building tells a story of progress and achievement.

---

## Overview

Task Builder was created for the GitHub Copilot Challenge, focusing on building creative and artistic tools that visualize transformation. It reimagines task management as an aesthetic journey where:

- Tasks evolve into architectural elements of a growing city
- Progress is expressed through visual metamorphosis of buildings
- Project management becomes an act of creative urban planning
- Each completed task contributes to a unique architectural narrative

### Benefits of City-Building Task Management

- **Intuitive Progress Visualization**

  - Watch your project grow like a real city
  - Instantly understand project status through the cityscape's development
  - Identify bottlenecks by spotting areas with incomplete buildings

- **Enhanced Motivation**

  - Transform mundane task completion into exciting city development
  - Feel rewarded as each completed task beautifies your city
  - Stay engaged through the satisfying visual feedback of growing architecture

- **Better Project Understanding**

  - Grasp the scale of your project through the size of your city
  - Organize related tasks by creating districts within your city
  - Understand task relationships through building placement and proximity

- **Enjoyable Project Management**
  - Make task management feel less like work and more like play
  - Share progress with stakeholders through an engaging visual medium
  - Create memorable project milestones as distinctive landmarks in your city

---

## Features

### 1. **Artistic Task Visualization**

- **Living Architecture**  
  Tasks are represented as dynamic architectural elements that evolve visually.
- **Visual Storytelling**  
  Each building's appearance reflects its task's journey from conception to completion.

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

### 5. **Creative Canvas**

- Your project becomes a canvas where tasks are artistic elements
- Express project progress through architectural composition
- Create unique cityscapes that tell your project's story

### 6. **Data Storage**

- Task information and building positions are saved in the browser, retaining the state for the next access.

---

## Installation

```bash
# Install dependencies
pnpm install
```

## Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

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

- **Architectural Styles**  
  Express different project phases through varied architectural designs

- **Dynamic Weather & Lighting**  
  Reflect project momentum through environmental effects

- **Time-lapse Recording**  
  Capture your city's growth journey as a visual story

- **Artistic Filters**  
  Apply different visual styles to your cityscape

- **Urban Planning Features**

  - Create roads to connect related tasks and establish workflow paths
  - Design districts to group similar tasks or project phases
  - Add parks and public spaces to visualize project milestones
  - Implement zoning systems to categorize different types of tasks
  - Create landmarks to highlight key project deliverables

- **District Management**
  - Assign color themes to different districts for better task categorization
  - Add district-level progress tracking and statistics
  - Enable district-specific viewing modes for focused work

---

## Notes

- This app does not use a server and saves data in the browser's local storage. Therefore, data will not be carried over if you change devices.
- Recommended browsers: Latest versions of Chrome, Firefox.

---

## Licenses

### Assets

- **Medieval RTS Sprites**  
  [Kenney's Medieval RTS Assets](https://kenney.nl/assets/medieval-rts) are licensed under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).

- **Icons**  
  The hammer and wrench icon from [IconDuck](https://iconduck.com/icons/158418/hammer-and-wrench) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The icon has been modified for use as a construction status indicator.

---
