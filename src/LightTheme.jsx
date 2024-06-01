import { createTheme } from '@mui/material/styles';

// Define the color palette
const lightModeText = 'hsl(200, 15%, 8%)';
const lightModeInput = 'hsl(0, 0%, 52%)';
const lightModeBackground = 'hsl(0, 0%, 98%)';
const lightModeElements = 'hsl(0, 0%, 100%)';

// Define the custom theme
const LightTheme = createTheme({
  palette: {
    
    primary: {
      main: lightModeElements,
    },
    background: {
      default: lightModeBackground,
      paper: lightModeElements,
    },
    text: {
      primary: lightModeText,
      secondary: lightModeInput,
    },
  },

  
  typography: {
    fontFamily: 'Nunito Sans, Arial, sans-serif',
    fontSize: 14, // Base font size for body copy
    h1: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.3rem',
      }
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.25rem',
      '@media (max-width:600px)': {
        fontSize: '1.15rem',
      }
    },
    body1: {
      fontWeight: 300,
      fontSize: '1rem', // 16px for detail page
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      }
    },
    body2: {
      fontWeight: 300,
      fontSize: '0.875rem', // 14px for homepage items
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      }
    },
  },
});

export default LightTheme;
