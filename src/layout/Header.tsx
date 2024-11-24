import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../hooks';
import { languageChanged, selectUserPreferences, themeChanged } from '../store';
import { SupportedAppLanguagesCodes, SupportedThemes } from '../types';
import { SUPPORTED_APP_LOCALES } from '../utils';

export const Header: FC = () => {
  const { t } = useTranslation();
  const { theme, language } = useAppSelector(selectUserPreferences);
  const dispatch = useAppDispatch();

  const locales = SUPPORTED_APP_LOCALES.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleLanguageChange = (event: SelectChangeEvent) => {
    dispatch(languageChanged(event.target.value as SupportedAppLanguagesCodes));
  };

  const handleThemeChange = (event: SelectChangeEvent) => {
    dispatch(themeChanged(event.target.value as SupportedThemes));
  };

  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'end',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
          minHeight: '56px',
        }}
      >
        <FormControl variant="filled">
          <InputLabel>{t('language')}</InputLabel>
          <Select
            value={language}
            onChange={handleLanguageChange}
            label={t('language')}
          >
            {locales.map((l) => (
              <MenuItem value={l.code} key={l.code}>
                {l.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled">
          <InputLabel>{t('theme')}</InputLabel>
          <Select value={theme} onChange={handleThemeChange}>
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </header>
  );
};
