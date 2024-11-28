import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // White
    },
    secondary: {
      main: '#1f1f1f', // Dark gray/Black
    },
    background: {
      default: '#121212', // Dark background for modern look
      paper: '#212121', // Slightly lighter background for elements
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#9e9e9e', // Light gray for secondary text
    },
    action: {
      hover: '#424242', // Slight hover effect (mid-gray)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#121212', // Default dark background for the app
          margin: 0,
          padding: 0,
        },
        '.MuiBox-root': {
          backgroundColor: 'transparent !important', // Transparent background for all Box components
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          backgroundColor: '#1f1f1f', // Match logo's dark areas
          color: '#ffffff',
          '&:hover': {
            textDecoration: 'none',
            opacity: 0.8,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#f5f5f5', // Light background on hover
            '& .MuiListItemIcon-root': {
              color: '#1f1f1f', // Dark icon color on hover
            },
            '& .MuiListItemText-primary': {
              color: '#1f1f1f', // Dark text color on hover
            },
          },
        },
      },
    },
  },
});

export default theme;
