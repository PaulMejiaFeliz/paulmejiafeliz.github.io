import { Container, Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Skills } from '../components';
import { useGetPortfolioUserQuery } from '../services';

export const Profile: FC = () => {
  const { t, i18n } = useTranslation();
  const { data, error, isLoading } = useGetPortfolioUserQuery(i18n.language);

  if (error) return <p>Error</p>;

  if (isLoading)
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Skeleton variant="rectangular" />
        <Skeleton variant="rounded" />
      </Container>
    );

  if (!data) return null;

  const {
    firstName,
    lastName,
    // contactInfo: { email, phoneNumber },
    address: { city, province, country },
    socialLinks: { linkedin, github },
    portfolio: { jobTitles, summary, experience, education, skills },
    languages,
    interests,
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
        {/* <p>Email: {email}</p>
        <p>Phone number: {phoneNumber}</p> */}
        <p>
          {city}, {province}, {country}
        </p>
        <ul>
          {jobTitles.map((title, i) => (
            <li key={i}>{title}</li>
          ))}
        </ul>
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
        <h2>{t('experience')}</h2>
        <ul>
          {experience.map((jobExperience, i) => (
            <li key={i}>
              <p>{jobExperience.company}</p>
              <p>{jobExperience.contractType}</p>
              <p>{jobExperience.mode}</p>
              <ul>
                {jobExperience.positions.map((position, i) => (
                  <li key={i}>
                    <p>{position.title}</p>
                    <p>
                      {new Date(position.startDate).getMonth() + 1}/
                      {new Date(position.startDate).getFullYear()} -{' '}
                      {position.endDate
                        ? `${
                            new Date(position.endDate).getMonth() + 1
                          }/${new Date(position.endDate).getFullYear()}`
                        : 'present'}
                    </p>
                    <ul>
                      {position.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Card>
      <Card
        sx={{
          p: 2,
        }}
      >
        <h2>{t('education')}</h2>
        <ul>
          {education.map((study, i) => (
            <li key={i}>
              <p>
                {study.degree} in {study.major}
              </p>
              <p>{study.institution}</p>
              <p>
                {new Date(study.startDate).getMonth() + 1}/
                {new Date(study.startDate).getFullYear()} -{' '}
                {study.endDate
                  ? `${new Date(study.endDate).getMonth() + 1}/${new Date(
                      study.endDate
                    ).getFullYear()}`
                  : 'present'}
              </p>
            </li>
          ))}
        </ul>
      </Card>
      <Card
        sx={{
          p: 2,
        }}
      >
        <h2>{t('skills')}</h2>
        <Skills skills={skills} />
      </Card>
      <Card
        sx={{
          p: 2,
        }}
      >
        <h2>{t('links')}</h2>
        <p>LinkedIn: {linkedin}</p>
        <p>GitHub: {github}</p>
      </Card>

      <Card
        sx={{
          p: 2,
        }}
      >
        <p>Languages</p>
        <ul>
          {languages.map((language, i) => (
            <li key={i}>
              {language.name} - {language.proficiency}
            </li>
          ))}
        </ul>

        <p>Interests</p>
        <ul>
          {interests.map((interest, i) => (
            <li key={i}>{interest}</li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};
