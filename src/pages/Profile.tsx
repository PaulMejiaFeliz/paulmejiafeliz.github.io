import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../components';

export const Profile: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>Paul Mejia Feliz</h1>
      <Card>
        <p>{t('helloWorld')}</p>
      </Card>
    </>
  );
};
