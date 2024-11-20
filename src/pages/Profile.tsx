import Card from '@mui/material/Card';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserContext } from '../hooks';
import { Skills } from '../components';

export const Profile: FC = () => {
  const { t } = useTranslation();
  const { firstName, lastName, summary, skills } = useUserContext();

  return (
    <>
      <Card>
        <h1>
          {firstName} {lastName}
        </h1>
        {t('helloWorld')}
      </Card>
      <Card>
        <p>{summary}</p>

        <Skills skills={skills} />
      </Card>
    </>
  );
};
