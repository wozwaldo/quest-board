# Quest Tracker - React TypeScript App

A modern, interactive quest tracking application built with React and TypeScript. Manage your daily quests with style using a retro-gaming inspired interface.

## Features

- **Add New Quests**: Create quests with titles and descriptions
- **Delete Quests**: Remove completed or unwanted quests with animated trash icon
- **Smart Warnings**: Get notified when you have too many active quests
- **Retro Gaming Theme**: Pixel art design with typewriter animation
- **TypeScript Support**: Full type safety and better development experience

## 🚀 Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS Animations** - Typewriter effect, fade-in animations, and interactive trash icons

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd react-ts-basics
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # App header with logo
│   ├── NewQuest.tsx        # Form to add new quests
│   ├── QuestList.tsx       # List container for quests
│   ├── Quest.tsx           # Individual quest item
│   └── InfoBox.tsx         # Info/warning messages
├── styles/
│   └── global.css          # Custom styles and animations
├── App.tsx                 # Main application component
└── main.tsx               # Application entry point
```

## Key Components

### Quest Interface

```typescript
interface Quest {
  id: number;
  title: string;
  description: string;
}
```

## Styling & Fun Elements

The app features a custom retro gaming theme with:

- Blue gradient color scheme (#2a03f4)
- Typewriter text animations
- Interactive hover effects
- Smooth animations and transitions
- Warning system alerts when you exceed 3 quests.

## 🔧 Development

This project uses modern development tools:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking
- **Vite** for fast builds and hot reload

---

_"The quest log lies empty... Will you chart its course, adventurer?"_ 🗡️✨
