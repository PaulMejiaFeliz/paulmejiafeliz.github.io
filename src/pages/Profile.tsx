import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Tag } from '../components';
import { useUserContext } from '../hooks';

import './Profile.scss';

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

        <ul className="skills">
          {skills.map((s) => (
            <li key={s}>
              <Tag text={s} />
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};
