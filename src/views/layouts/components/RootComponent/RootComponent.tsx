import { Route, Routes } from 'react-router-dom';

import { Wrapper } from './components/Wrapper';
import { MainLayout } from 'views/layouts/MainLayout/MainLayout';

import { mainRoutes } from './routes';
import { Home } from 'views/pages/Home/Home';
import { useScrollToAnchor } from 'hooks/useScrollToAnchor';

export const RootComponent = () => {
  useScrollToAnchor();

  return (
    <Wrapper>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={mainRoutes.Root} element={<Home />} />
        </Route>
      </Routes>
    </Wrapper>
  );
};
