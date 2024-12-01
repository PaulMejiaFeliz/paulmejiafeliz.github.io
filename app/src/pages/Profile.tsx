import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import { FC } from 'react';
import { useTranslation } from '../../node_modules/react-i18next';
import { Skills } from '../components';
import { useGetPortfolioUserByIdQuery } from '../services';

export const Profile: FC = () => {
  const { t } = useTranslation();
  const { data, error, isLoading } = useGetPortfolioUserByIdQuery('');

  if (error) return <p>Error</p>;

  if (isLoading) return <p>Loading</p>;

  if (!data) return null;

  const {
    firstName,
    lastName,
    portfolio: { summary, skills },
  } = data;

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
