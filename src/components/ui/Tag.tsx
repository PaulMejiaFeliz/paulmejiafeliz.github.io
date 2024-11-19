import { FC } from 'react';

import './Tag.scss';

export type TagProps = {
  text: string;
};

export const Tag: FC<TagProps> = ({ text }) => {
  return <div className="tag">{text}</div>;
};
