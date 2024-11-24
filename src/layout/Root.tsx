import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { selectUserPreferences } from '../store';
import { darkTheme, lightTheme, systemTheme } from '../utils';
import { Footer } from './Footer';
import { Header } from './Header';

import './Root.scss';

function Root() {
  const { i18n } = useTranslation();
  const { theme, language } = useAppSelector(selectUserPreferences);
  const [userTheme, setUserTheme] = useState<Theme>(systemTheme);

  useEffect(() => {
    void i18n.changeLanguage(language);
  }, [i18n, language]);

  useEffect(() => {
    switch (theme) {
      case 'dark':
        setUserTheme(darkTheme);
        break;
      case 'light':
        setUserTheme(lightTheme);
        break;

      default:
        setUserTheme(systemTheme);
    }
  }, [theme]);

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
