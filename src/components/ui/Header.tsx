import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DEFAULT_APP_LOCALE,
  SUPPORTED_APP_LOCALES,
} from '../../utils/constants';

import './header.scss';

export const Header: FC = () => {
  const { i18n } = useTranslation();

  const locales = SUPPORTED_APP_LOCALES.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="header">
      <select defaultValue={DEFAULT_APP_LOCALE} onChange={handleSelect}>
        {locales.map((l) => (
          <option value={l.code} key={l.code}>
            {l.name}
          </option>
        ))}
      </select>
    </div>
  );
};
