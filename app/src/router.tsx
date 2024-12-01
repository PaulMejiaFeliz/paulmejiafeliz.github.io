import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Root from './layout/Root';
import { Profile } from './pages';

const routes: RouteObject[] = [
  {
    path: '/*',
    element: <Root />,
    errorElement: <Root />, // TODO: Add a error element
    children: [
      {
        path: '*',
        element: <Profile />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
