import React from 'react';
import styles from './app.module.css';
import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';

export const App: React.FC = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see this.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton afterSignOutUrl="home" />
        <p>This content is private. Only signed in users can see this.</p>
      </SignedIn>
    </div>
  );
};
