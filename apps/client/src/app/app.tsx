import React from 'react';
import styles from './app.module.css';
import { Button } from '../components/button';
import { NavBar } from '../components/navBar';

export const App: React.FC = () => {
  return (
    <div>
      <p>Hello World</p>
      <Button/>
      <NavBar/>
    </div>
  );
};
