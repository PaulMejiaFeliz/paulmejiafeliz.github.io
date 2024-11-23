import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { darkTheme, lightTheme, systemTheme } from '../utils';
import { Footer } from './Footer';
import { Header } from './Header';

import './Root.scss';

function Root() {
  const [mode, setMode] = useState<'system' | 'light' | 'dark'>('system');

  let theme = systemTheme;
  if (mode === 'dark') {
    theme = darkTheme;
  } else if (mode === 'light') {
    theme = lightTheme;
  }

  const handleModeChange = (mode: 'system' | 'light' | 'dark') => {
    setMode(mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className="container">
        <Header onModeChange={handleModeChange} mode={mode} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Root;
