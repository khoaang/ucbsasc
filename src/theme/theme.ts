import { createTheme, responsiveFontSizes } from '@mui/material';
import { colors, RADIUS } from './colors';

const serif = '"Fraunces", "Times New Roman", Times, serif';
const sans = '"DM Sans", "Helvetica Neue", Helvetica, Arial, sans-serif';

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
      paper: colors.paper,
    },
    text: {
      primary: colors.charcoal,
      secondary: '#5C6368',
    },
    divider: 'rgba(44, 53, 57, 0.14)',
    info: {
      main: colors.bayNavy,
      light: '#3A4A56',
      dark: '#141C24',
      contrastText: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: RADIUS,
  },
  typography: {
    fontFamily: sans,
    h1: {
      fontFamily: serif,
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      color: colors.charcoal,
    },
    h2: {
      fontFamily: serif,
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
      color: colors.charcoal,
    },
    h3: {
      fontFamily: serif,
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.015em',
      lineHeight: 1.2,
      color: colors.charcoal,
    },
    h4: {
      fontFamily: serif,
      fontSize: '1.55rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: colors.charcoal,
    },
    h5: {
      fontFamily: serif,
      fontSize: '1.3rem',
      fontWeight: 600,
      color: colors.charcoal,
    },
    h6: {
      fontFamily: sans,
      fontSize: '1.05rem',
      fontWeight: 600,
      color: colors.charcoal,
    },
    body1: {
      fontFamily: sans,
      fontSize: '1.0625rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: sans,
      fontSize: '0.95rem',
      lineHeight: 1.65,
    },
    button: {
      fontFamily: sans,
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    overline: {
      fontFamily: sans,
      letterSpacing: '0.12em',
      fontWeight: 700,
      fontSize: '0.7rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.cream,
          color: colors.charcoal,
          backgroundImage: `
            radial-gradient(rgba(44, 53, 57, 0.035) 0.7px, transparent 0.7px)
          `,
          backgroundSize: '7px 7px',
        },
        a: {
          color: 'inherit',
        },
        '::selection': {
          backgroundColor: colors.lightPink,
          color: colors.charcoal,
        },
        'img, video, iframe, canvas': {
          borderRadius: RADIUS,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(247, 240, 230, 0.94)',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: RADIUS,
          padding: '10px 20px',
          fontSize: '0.95rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: colors.darkPink,
          color: '#fff',
          '&:hover': {
            backgroundColor: '#D44E6C',
          },
        },
        outlined: {
          borderWidth: 1.5,
          borderColor: colors.charcoal,
          color: colors.charcoal,
          '&:hover': {
            borderWidth: 1.5,
            borderColor: colors.charcoal,
            backgroundColor: 'rgba(44, 53, 57, 0.05)',
          },
        },
        sizeLarge: {
          padding: '12px 26px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS,
          boxShadow: '3px 3px 0 rgba(44, 53, 57, 0.12)',
          border: `1.5px solid ${colors.charcoal}`,
          backgroundImage: 'none',
          backgroundColor: colors.paper,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: RADIUS,
        },
        elevation1: {
          boxShadow: 'none',
          border: `1.5px solid rgba(44, 53, 57, 0.18)`,
        },
        elevation2: {
          boxShadow: '2px 2px 0 rgba(44, 53, 57, 0.1)',
          border: `1.5px solid rgba(44, 53, 57, 0.2)`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS,
          fontWeight: 600,
          border: `1px solid ${colors.charcoal}`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: RADIUS,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: `${RADIUS}px !important`,
          '&:before': { display: 'none' },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
