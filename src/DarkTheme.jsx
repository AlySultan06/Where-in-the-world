import { createTheme } from '@mui/material/styles'
// Define the color palette
const darkModeText = 'hsl(0, 0%, 100%)';
const darkModeBackground = 'hsl(207, 26%, 17%)';
const darkModeElements = 'hsl(209, 23%, 22%)';

// Define the custom theme
const DarkTheme = createTheme({
  palette: {

    primary: {
      main: darkModeElements,
    },
    background: {
      default: darkModeBackground,
      paper: darkModeElements,
    },
    text: {
      primary: darkModeText,
      secondary: 'hsl(208.42, 18.81%, 80.20%)',
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

export default DarkTheme;
