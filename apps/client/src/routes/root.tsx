import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../features/navbar';
import { useUser } from '@clerk/clerk-react';
import { useFindOrCreateMutation } from '../store/services/users.api';

export const Root: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    throw new Error('You have to log in');
  }

  const [findOrCreate] = useFindOrCreateMutation({
    fixedCacheKey: 'logged-in-user',
  });

  useEffect(() => {
    findOrCreate({ clerkId: user.id });
  }, [findOrCreate, user.id]);

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <Navbar />
      <div className="flex h-full w-full flex-col items-center justify-start pt-4">
        <Outlet />
      </div>
    </div>
  );
};
