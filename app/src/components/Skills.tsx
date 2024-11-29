import { Chip, Stack } from '@mui/material';
import { FC } from 'react';

export type SkillsProps = {
  skills: string[];
};

export const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <Stack direction="row" gap={1} flexWrap="wrap">
      {skills.map((s) => (
        <Chip label={s} color="primary" key={s} />
      ))}
    </Stack>
  );
};
