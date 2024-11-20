import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useColorScheme,
} from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_APP_LOCALE, SUPPORTED_APP_LOCALES } from '../utils/constants';

export const Header: FC = () => {
  const { t, i18n } = useTranslation();
  const { mode, setMode } = useColorScheme();

  const locales = SUPPORTED_APP_LOCALES.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleColorSchemaChange = (event: SelectChangeEvent<string>) => {
    setMode(event.target.value as 'system' | 'light' | 'dark');
  };

  // if (!mode) {
  //   return null;
  // }

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
          <Select value={mode} onChange={handleColorSchemaChange}>
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </header>
  );
};
