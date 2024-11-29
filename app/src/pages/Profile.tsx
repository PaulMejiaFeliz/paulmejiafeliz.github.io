import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import { FC } from 'react';
import { useTranslation } from '../../node_modules/react-i18next';
import { Skills } from '../components';
import { useUserContext } from '../hooks';

export const Profile: FC = () => {
  const { t } = useTranslation();
  const { firstName, lastName, summary, skills } = useUserContext();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Card
        sx={{
          p: 2,
        }}
      >
        <h1>
          {firstName} {lastName}
        </h1>
      </Card>
      <Card
        sx={{
          p: 2,
        }}
      >
        <h2>{t('summary')}</h2>
        <p>{summary}</p>
      </Card>
      <Card
        sx={{
          p: 2,
        }}
      >
        <h2>{t('skills')}</h2>
        <Skills skills={skills} />
      </Card>
    </Container>
  );
};
