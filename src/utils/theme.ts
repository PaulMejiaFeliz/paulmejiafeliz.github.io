import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

export const systemTheme = createTheme({
  cssVariables: true,
  defaultColorScheme: 'dark',
  colorSchemes: {
    dark: {
      palette: {
        primary: deepPurple,
        secondary: deepPurple,
      },
    },
    light: {
      palette: {
        primary: deepPurple,
        secondary: deepPurple,
      },
    },
  },
});

export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',

    primary: deepPurple,
    secondary: deepPurple,
  },
});

export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',

    primary: deepPurple,
    secondary: deepPurple,
  },
});
