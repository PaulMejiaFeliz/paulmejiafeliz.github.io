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
import { DEFAULT_APP_LOCALE, SUPPORTED_APP_LOCALES } from '../utils/constants';

export type HeaderProps = {
  mode: 'system' | 'light' | 'dark';
  onModeChange: (mode: 'system' | 'light' | 'dark') => void;
};

export const Header: FC<HeaderProps> = ({ mode, onModeChange }) => {
  const { t, i18n } = useTranslation();

  const locales = SUPPORTED_APP_LOCALES.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleModeChange = (event: SelectChangeEvent<string>) => {
    onModeChange(event.target.value as 'system' | 'light' | 'dark');
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
            defaultValue={DEFAULT_APP_LOCALE}
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
          <Select value={mode} onChange={handleModeChange}>
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </header>
  );
};
