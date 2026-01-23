# Southeast Asian Student Coalition (SASC) Website

This repository holds the code for the UC Berkeley SASC website. It is a React + TypeScript project using Vite and Material UI.

## Quick Start
   ```bash
   git clone git@github.com:khoaang/ucbsasc.git
   cd ucbsasc
   npm install
   npm run dev
   ```
The dev server runs on `http://localhost:5173`.

## Project Docs
- [New Developers Guide](docs/new-developers.md) – onboarding checklist, stack basics, common commands.
- [Project Overview and Setup](docs/project-overview.md) – tech stack, features, prerequisites, scripts.
- [Project Structure](docs/project-structure.md) – directory map and key files.
- [Development Guide](docs/development-guide.md) – workflows, coding standards, common tasks, troubleshooting.
- [Tooling and Linting Notes](docs/tooling-and-linting.md) – ESLint and build configuration tips.

## Pages at a Glance
- Home – community overview.
- About – mission, history, and leadership.
- Events – upcoming and past events (all cards share the same layout component).
- Lead – Spring 2026 officer recruiting hub with deadlines and data pulled from `src/data/lead*.ts`.
- Resources – helpful links and documents.
- Contact – ways to reach SASC.
- Secret page `/qr` – QR code generator used for tabling (intentionally hidden from the navbar).

## Scripts
- `npm run dev` – start the dev server.
- `npm run build` – build the production bundle.
- `npm run preview` – preview the production bundle locally.
- `npm run lint` – run ESLint with the project rules.

## Contributing
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- Create feature branches for new work.
- Run `npm run lint` before opening a pull request.
- Keep commit messages short and descriptive.

License: MIT
