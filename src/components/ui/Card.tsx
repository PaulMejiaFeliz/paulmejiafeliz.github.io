import { FC, PropsWithChildren } from 'react';

import './Card.scss';

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className="card">{children}</div>;
};
