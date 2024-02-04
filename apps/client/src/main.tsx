import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import { Root } from './routes/root';
import { Post} from './routes/post';
import { Home } from './routes/home';
import { Help } from './routes/help';
import { Subs } from './routes/subs';
import {Sign} from './routes/sign'
import { ClerkProvider } from '@clerk/clerk-react';
import Navbar from './components/navBar';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '/subs',
        element: <Subs />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/sign',
        element: <Sign />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
      
    </ClerkProvider>
    <RouterProvider router={router} />
  </StrictMode>
);



