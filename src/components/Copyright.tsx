import { Link, Typography } from '@mui/material';

export const Copyright = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://paunmejiafeliz.me">
        paulmejiafeliz.me
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};
