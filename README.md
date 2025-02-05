# Southeast Asian Student Coalition (SASC) Website

Welcome to the SASC website repository! This project serves as the official website for the Southeast Asian Student Coalition at UC Berkeley. This documentation will guide you through setting up and contributing to the project.

## 📚 Table of Contents
- [For New Developers](#for-new-developers)
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Guide](#development-guide)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)
- [Advanced Topics](#advanced-topics)
- [Resources](#resources)

## 🌟 For New Developers

### First Time Setup Checklist
1. [ ] Install required software (see [Prerequisites](#prerequisites))
2. [ ] Clone the repository
3. [ ] Install dependencies
4. [ ] Run the development server
5. [ ] Make your first test change
6. [ ] Create your first branch

### Key Concepts to Understand
1. **React Basics**
   - Components are like building blocks
   - Props pass data between components
   - State manages component data
   - Example:
     ```tsx
     // Basic React component
     const WelcomeMessage = ({ name }: { name: string }) => {
       return <h1>Welcome to SASC, {name}!</h1>;
     };
     ```

2. **TypeScript Fundamentals**
   - Types help catch errors early
   - Interfaces define object shapes
   - Example:
     ```tsx
     // TypeScript interface example
     interface Event {
       title: string;
       date: Date;
       location: string;
       description?: string; // ? means optional
     }
     ```

3. **Material-UI (MUI) Basics**
   - Pre-built components
   - Consistent styling
   - Example:
     ```tsx
     import { Button, Typography } from '@mui/material';
     
     const MyComponent = () => {
       return (
         <>
           <Typography variant="h1">Hello!</Typography>
           <Button variant="contained">Click Me</Button>
         </>
       );
     };
     ```

### Common Commands You'll Use
```bash
# Start development server
npm run dev

# Install a new package
npm install package-name

# Create a new branch
git checkout -b feature/your-feature

# Check status of your changes
git status

# Stage changes
git add .

# Commit changes
git commit -m "description of changes"

# Push changes
git push origin your-branch-name
```

## Project Overview

### Tech Stack
- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.0.5
- **UI Framework**: Material-UI (MUI) 6.3.1
- **Routing**: React Router DOM 7.1.1
- **Animation**: Framer Motion 11.16.1
- **Styling**: Emotion (CSS-in-JS)

### Key Features
- **Home Page**: Overview of SASC community and latest announcements
- **About Page**: History, mission, and values of SASC
- **Events Page**: Upcoming and past events calendar
- **Contact Page**: Contact forms and social media links
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Material Design components with custom theming

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
- npm (comes with Node.js)
  - Verify installation: `npm --version`
- Git
  - Windows: Download from https://git-scm.com/
  - Mac: Install with Homebrew: `brew install git`
  - Verify installation: `git --version`
- Code Editor (VS Code recommended)
  - Download from: https://code.visualstudio.com/
  - Recommended extensions:
    - ESLint
    - Prettier
    - TypeScript + JavaScript
    - Material-UI Snippets

### Installation Steps

1. Clone the repository:
   ```bash
   git clone git@github.com:khoaang/ucbsasc.git
   cd ucbsasc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint for code quality
- `npm run preview`: Preview production build locally

## Project Structure

### Detailed Directory Overview
```
ucbsasc/
├── src/                    # Source code
│   ├── assets/            # Static assets (images, fonts, etc.)
│   │   ├── images/        # Image files
│   │   └── fonts/         # Font files
│   ├── components/        # Reusable React components
│   │   ├── common/        # Shared components (buttons, inputs, etc.)
│   │   ├── layout/        # Layout components (header, footer, etc.)
│   │   └── features/      # Feature-specific components
│   ├── pages/             # Page components
│   │   ├── Home/         # Home page and related components
│   │   ├── About/        # About page and related components
│   │   └── Events/       # Events page and related components
│   ├── theme/             # MUI theme customization
│   │   ├── palette.ts    # Color definitions
│   │   └── typography.ts # Typography settings
│   ├── utils/            # Utility functions and helpers
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main App component
│   └── main.tsx         # Entry point
├── public/               # Public static files
├── tests/               # Test files
└── [Other config files] # Configuration files
```

### Key Files Explained
- `src/App.tsx`: Main application component
- `src/main.tsx`: Application entry point
- `src/theme/`: Custom styling configurations
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `vite.config.ts`: Build tool configuration

## Development Guide

### Step-by-Step Development Process
1. **Starting a New Feature**
   ```bash
   # Create new branch
   git checkout -b feature/your-feature
   
   # Create new component file
   touch src/components/features/YourComponent.tsx
   ```

2. **Component Development Example**
   ```tsx
   // src/components/features/EventCard.tsx
   import { Card, CardContent, Typography } from '@mui/material';
   
   interface EventCardProps {
     title: string;
     date: string;
     description: string;
   }
   
   const EventCard: React.FC<EventCardProps> = ({
     title,
     date,
     description
   }) => {
     return (
       <Card>
         <CardContent>
           <Typography variant="h5">{title}</Typography>
           <Typography color="textSecondary">{date}</Typography>
           <Typography variant="body2">{description}</Typography>
         </CardContent>
       </Card>
     );
   };
   
   export default EventCard;
   ```

3. **Using the Component**
   ```tsx
   // In another file
   import EventCard from '../components/features/EventCard';
   
   const EventsPage = () => {
     return (
       <EventCard
         title="Night Market 2024"
         date="April 15, 2024"
         description="Annual SASC night market featuring food and performances"
       />
     );
   };
   ```

### Code Style Guide

#### Naming Conventions
- **Components**: PascalCase (e.g., `EventCard.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Variables**: camelCase (e.g., `userName`)
- **Interfaces**: PascalCase with 'I' prefix (e.g., `IEventProps`)
- **Types**: PascalCase (e.g., `EventType`)

#### File Structure
```tsx
// 1. Imports
import React from 'react';
import { styled } from '@mui/material/styles';

// 2. Types/Interfaces
interface Props {
  // ...
}

// 3. Styled Components
const StyledContainer = styled('div')(({ theme }) => ({
  // ...
}));

// 4. Component
const Component: React.FC<Props> = ({ prop1, prop2 }) => {
  // 4.1 Hooks
  const [state, setState] = useState();
  
  // 4.2 Effects
  useEffect(() => {
    // ...
  }, []);
  
  // 4.3 Handlers
  const handleClick = () => {
    // ...
  };
  
  // 4.4 Render
  return (
    // ...
  );
};

// 5. Export
export default Component;
```

## Common Tasks

### Creating a New Page
1. Create page component:
   ```tsx
   // src/pages/NewPage.tsx
   import { Container, Typography } from '@mui/material';
   
   const NewPage = () => {
     return (
       <Container>
         <Typography variant="h1">New Page</Typography>
       </Container>
     );
   };
   
   export default NewPage;
   ```

2. Add route in `App.tsx`:
   ```tsx
   import NewPage from './pages/NewPage';
   
   // In your router configuration
   <Route path="/new-page" element={<NewPage />} />
   ```

### Working with MUI Components
```tsx
import {
  Button,
  Card,
  Typography,
  TextField
} from '@mui/material';

// Basic form example
const Form = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6">Contact Form</Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
      />
      <Button variant="contained">
        Submit
      </Button>
    </Card>
  );
};
```

## Troubleshooting

### Common Error Messages

1. **"Module not found"**
   ```
   Error: Cannot find module '@/components/Something'
   ```
   Solution:
   - Check import path
   - Verify file exists
   - Check tsconfig.json paths

2. **Type Errors**
   ```
   Type '{ prop: string; }' is not assignable to type 'never'
   ```
   Solution:
   - Define proper interface
   - Check prop types
   - Verify component generic types

### Development Environment Issues

1. **Node Version Conflicts**
   ```bash
   # Check Node version
   node --version
   
   # Use correct version (if using nvm)
   nvm use 18
   ```

2. **Package Installation Issues**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Remove node_modules
   rm -rf node_modules
   
   # Reinstall
   npm install
   ```

## Resources

### Learning Materials
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Material-UI Documentation](https://mui.com/)
- [Git Basics](https://git-scm.com/book/en/v2)

### Recommended VS Code Extensions
- ESLint
- Prettier
- GitLens
- Material Icon Theme
- Auto Import

### Useful Tools
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [MUI Theme Creator](https://zenoo.github.io/mui-theme-creator/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

---

For any additional questions or clarifications, please reach out to the project maintainers or check our internal documentation.

## Features

- **Home Page**: Overview of the community.
- **About Page**: History and mission of SASC.
- **Contact Page**: Connect with us.
- **Events Page**: Information on events and activities.

## Technical Overview

This project utilizes:

- **React** for building user interfaces
- **TypeScript** for type safety and better developer experience
- **Vite** for fast and optimized builds
- **Material-UI** for UI components

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd sasc-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm run dev
```

## Development Guidelines

- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for coding standards.
- Use feature branches for new features and bug fixes.
- Write clear and concise commit messages.

## Contribution Process

1. Fork the repository and create your branch from `main`.
2. Ensure your code follows the coding standards and passes all tests.
3. Submit a pull request for review.

## License

This project is licensed under the MIT License.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
