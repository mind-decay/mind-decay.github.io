import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'views/components/Loader';
import { Wrapper } from './components/Wrapper';
const MainLayout = lazy(() => import('views/layouts/MainLayout/MainLayout'));
const Home = lazy(() => import('views/pages/Home/Home'));

import { mainRoutes } from './routes';

export const RootComponent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Wrapper>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={mainRoutes.Root} element={<Home />} />
          </Route>
        </Routes>
      </Wrapper>
    </Suspense>
  );
};
