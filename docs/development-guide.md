# Development Guide

This doc covers the day-to-day workflow, coding standards, and the most common tasks you will run into.

## Workflow Basics

### Start a New Feature
```bash
git checkout -b feature/my-feature
```
Create or edit components under `src/components/` or pages under `src/pages/`, then commit and push the branch when you are ready for review.

### Component Development Example
```tsx
// src/components/features/EventCard.tsx
import { Card, CardContent, Typography } from '@mui/material';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
}

const EventCard = ({ title, date, description }: EventCardProps) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography color="text.secondary">{date}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

export default EventCard;
```

### Using the Component
```tsx
import EventCard from '../components/features/EventCard';

const EventsPage = () => (
  <EventCard
    title="Night Market 2024"
    date="April 15, 2024"
    description="Annual SASC night market featuring food and performances"
  />
);
```

## Code Style Expectations

### Naming Conventions
- Components: `PascalCase`, e.g. `EventCard.tsx`
- Hooks and utilities: `camelCase`
- Interfaces: `PascalCase` (no `I` prefix)
- Types: `PascalCase`
- Files: `PascalCase` for components, `camelCase` for utilities

### File Layout Template
```tsx
// 1. Imports
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

// 2. Types or interfaces
type Props = { title: string };

// 3. Styled components
const StyledContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

// 4. Component
const MyComponent = ({ title }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // side effects
  }, []);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <StyledContainer>
      {title} {count}
      <button onClick={handleClick}>Increment</button>
    </StyledContainer>
  );
};

export default MyComponent;
```

## Common Tasks

### Create a Page
```tsx
// src/pages/NewPage.tsx
import { Container, Typography } from '@mui/material';

const NewPage = () => (
  <Container>
    <Typography variant="h1">New Page</Typography>
  </Container>
);

export default NewPage;
```
Add a route in `src/App.tsx`:
```tsx
<Route path="/new-page" element={<NewPage />} />
```

### Work with MUI Components
```tsx
import { Button, Card, Typography, TextField } from '@mui/material';

const SimpleForm = () => (
  <Card sx={{ p: 2 }}>
    <Typography variant="h6">Contact Form</Typography>
    <TextField label="Name" fullWidth margin="normal" />
    <Button variant="contained">Submit</Button>
  </Card>
);
```

## Troubleshooting

### Module Not Found
```
Error: Cannot find module '@/components/Something'
```
Check the import path, ensure the file exists, and confirm `tsconfig.json` has the correct `paths` entry.

### Type Errors
```
Type '{ prop: string; }' is not assignable to type 'never'
```
Make sure the receiving component defines props correctly and that you exported the right TypeScript type.

### Node Version or Dependency Issues
```bash
# confirm version
node --version
npm --version

# clear cache and reinstall if needed
npm cache clean --force
rm -rf node_modules
npm install
```

## Development Guidelines
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- Create feature branches for new work.
- Keep commit messages short and descriptive.
- Run `npm run lint` before opening a pull request.

## Contribution Process
1. Fork the repo and create a branch off `main`.
2. Ensure linting passes and your changes are tested manually.
3. Open a pull request; include context and screenshots if it is a visual change.

## Extra Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material UI Docs](https://mui.com/)
- [Git Basics](https://git-scm.com/book/en/v2)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [MUI Theme Creator](https://zenoo.github.io/mui-theme-creator/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

Advanced ESLint and Vite configuration notes live in [tooling-and-linting](./tooling-and-linting.md).
