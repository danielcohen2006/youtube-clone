import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import { Root } from './routes/root';
import { Post} from './routes/post';
import { Home } from './routes/home';
import { Help } from './routes/help';
import { Subs } from './routes/subs';
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
    ],
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
