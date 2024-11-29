import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { UserContext } from '../contexts';
import { User } from '../types';

import userData from '../../../data/user.json';

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    setUser(userData as unknown as User);
  }, []);

  if (!user) return null;

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
