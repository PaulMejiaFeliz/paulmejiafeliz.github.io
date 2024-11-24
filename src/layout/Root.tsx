import { CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { selectUserPreferences } from '../store';
import { darkTheme, lightTheme, systemTheme } from '../utils';
import { Footer } from './Footer';
import { Header } from './Header';

import './Root.scss';

function Root() {
  const { theme } = useAppSelector(selectUserPreferences);

  let userTheme = systemTheme;
  if (theme === 'dark') {
    userTheme = darkTheme;
  } else if (theme === 'light') {
    userTheme = lightTheme;
  }

  return (
    <ThemeProvider theme={userTheme}>
      <CssBaseline enableColorScheme />
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Root;
