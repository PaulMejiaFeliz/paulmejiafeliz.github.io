import { useContext } from 'react';
import { UserContext } from '../contexts';
import { User } from '../types';

export function useUserContext(): User {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
}
