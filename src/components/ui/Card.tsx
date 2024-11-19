import { FC, ReactNode } from 'react';

import './Card.scss';

export type CardProps = {
  children: ReactNode;
};

export const Card: FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};
