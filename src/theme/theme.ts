import { createTheme, responsiveFontSizes } from '@mui/material';
import { colors } from './colors';

let theme = createTheme({
  palette: {
    primary: {
      main: colors.pink,
      light: colors.lightPink,
      dark: colors.darkPink,
    },
    secondary: {
      main: colors.gold,
      light: colors.lightGold,
      dark: '#B38F2D',
    },
    background: {
      default: colors.cream,
      paper: '#FFFFFF',
    },
    text: {
      primary: colors.charcoal,
      secondary: '#595959',
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.cream,
          color: colors.charcoal,
        },
        a: {
          color: 'inherit',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          boxShadow: '0 8px 24px rgba(30, 43, 54, 0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          fontSize: '1rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        },
        outlined: {
          borderWidth: 1,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 24px rgba(30, 43, 54, 0.08)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 16px 30px rgba(30, 43, 54, 0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme; 