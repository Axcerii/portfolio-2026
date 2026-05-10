# 🐉 Hugo Malezet - Portfolio 2026

Welcome to the official repository for my interactive 2026 Developer Portfolio. 

This project is built to showcase my presentation, passions, professional experiences, and technical skills through a highly dynamic and interactive user interface. The overarching theme revolves around beautiful aesthetics, smooth animations, and mysterious "dragon" symbols that guide the user experience.

---

## ✨ Key Features

- **Interactive Hero (The Eye)**: A custom, interactive eye component that dynamically tracks the user's cursor while respecting boundary constraints.
- **Dynamic Navigation System**: An immersive and sticky navigation bar utilizing glassmorphic design and custom icons to scroll smoothly between sections.
- **Animated Loading Screen**: A custom initial loader that ensures all heavy assets (like the Hero background) are fully loaded before revealing the experience.
- **Responsive Layout**: Thoughtfully crafted with Tailwind CSS to ensure the experience is seamless across Mobile, Tablet, and Desktop breakpoints.
- **Scroll Hijacking (Controlled)**: Smooth, lock-and-release scrolling flow that introduces the site elements progressively.

## 🛠️ Tech Stack

This project leverages modern web technologies to ensure performance, maintainability, and high-end visual fidelity.

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[React](https://reactjs.org/)** - UI library (using React Hooks extensively)
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid styling
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager

## 🚀 Getting Started

If you want to clone this repository and run the project locally, follow these steps:

### Prerequisites

Make sure you have [Bun](https://bun.sh/), [Node.js](https://nodejs.org/), or another package manager installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Axcerii/portfolio-2026.git
   cd portfolio-2026
   ```

2. **Install dependencies:**
   ```bash
   bun install
   # or npm install / yarn install
   ```

3. **Run the development server:**
   ```bash
   bun dev
   ```

4. **View the project:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

- `/src/app` - Contains the main Next.js entry points, layouts, and global styles.
- `/src/lib/components` - Reusable UI elements, modularized by feature (e.g., `hero`, `nav`, `passions`, `projects`, etc.).
- `/src/config` - Centralized configuration files (e.g., text content and metadata) to make updating the portfolio easy without touching the logic.
- `/public` - Static assets, images, and the dragon symbols.

## 🤝 Contributing & Feedback

While this is a personal portfolio project, feedback on the code architecture or visual design is always appreciated! Feel free to open an issue or reach out directly.

---
*Crafted with passion by Hugo Malezet.*
