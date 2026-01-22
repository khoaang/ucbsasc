# Project Overview and Setup

This project powers the public website for the Southeast Asian Student Coalition at UC Berkeley. It is a React application written in TypeScript, styled with Material UI, and bundled with Vite.

## Tech Stack
- **Frontend framework**: React 18 with TypeScript
- **Build tool**: Vite 6
- **UI framework**: Material UI (MUI) 6
- **Routing**: React Router DOM 7
- **Animation**: Framer Motion 11
- **Styling**: Emotion (CSS-in-JS)

## Key Features
- **Home Page**: Overview of the SASC community and current announcements.
- **About Page**: History, mission, and leadership profiles.
- **Events Page**: Upcoming and past event cards, all backed by the shared `EventCard` component.
- **Lead Page**: Spring 2026 recruitment hub with branch details, deadlines, and application links.
- **Resources Page**: Useful links and documents for members and interns.
- **Contact Page**: Ways to reach the organization.
- **Secret Page `/qr`**: Quick QR code generator used for tabling and flyers (no navbar link on purpose).

## Getting Started

### Prerequisites
- Node.js v18 or newer  
  Verify with `node --version`
- npm (ships with Node)  
  Verify with `npm --version`
- Git  
  Verify with `git --version`
- VS Code (recommended) with extensions:
  - ESLint
  - Prettier
  - TypeScript + JavaScript Language Features
  - Material UI Snippets

### Installation Steps
```bash
git clone git@github.com:khoaang/ucbsasc.git
cd ucbsasc
npm install
npm run dev
```
The dev server runs on `http://localhost:5173`.

### Available npm Scripts
- `npm run dev` – start the development server
- `npm run build` – create a production bundle
- `npm run preview` – preview the production bundle locally
- `npm run lint` – run ESLint with the project rules

Ready to contribute? Check out the [project structure](./project-structure.md) next so you know where everything lives, or jump straight to the [development guide](./development-guide.md) for day-to-day workflows.
