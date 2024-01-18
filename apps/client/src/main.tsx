import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import { Root } from './routes/root';
import { Orel } from './routes/orel';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [],
  },
  {
    path: '/orel',
    element: <Orel />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
