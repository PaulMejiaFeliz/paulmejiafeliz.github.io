import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

export const Theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: true,
    light: true,
  },
  palette: {
    mode: 'dark',
    primary: deepPurple,
    secondary: deepPurple,
  },
});
