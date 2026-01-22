# New Developers Guide

Welcome aboard! This guide walks you through the basics so you can ship your first changes quickly.

## First-Time Setup Checklist
- [ ] Install the tools listed in the [Prerequisites](./project-overview.md#prerequisites)
- [ ] Clone the repository
- [ ] Run `npm install`
- [ ] Start the dev server with `npm run dev`
- [ ] Make a small change and confirm it shows up
- [ ] Create a branch for your work

## Quick Primer on the Stack

### React basics
- Components return UI.
- Props pass data from parent to child.
- State tracks local component data with `useState`.

```tsx
const WelcomeMessage = ({ name }: { name: string }) => {
  return <h1>Welcome to SASC, {name}!</h1>;
};
```

### TypeScript basics
- Types catch mistakes early.
- Interfaces describe shapes of objects.

```tsx
interface Event {
  title: string;
  date: Date;
  location: string;
  description?: string; // optional with ?
}
```

### Material UI (MUI)
- We use MUI for standard components and styling.

```tsx
import { Button, Typography } from '@mui/material';

const MyComponent = () => (
  <>
    <Typography variant="h1">Hello!</Typography>
    <Button variant="contained">Click Me</Button>
  </>
);
```

## Commands You Will Use Often

```bash
# Start the dev server
npm run dev

# Install a dependency
npm install package-name

# Create a new branch
git checkout -b feature/my-feature

# Stage changes
git add .

# Commit and push
git commit -m "Add feature"
git push origin feature/my-feature
```

Need a deeper dive? Pair this document with the [project overview](./project-overview.md) and [development guide](./development-guide.md).
