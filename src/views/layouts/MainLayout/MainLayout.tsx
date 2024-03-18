import { Outlet } from 'react-router-dom';

import { MainLayoutContent, MainLayoutContentWrapper, MainLayoutWrapper } from './MainLayout.styled';
import { Footer, Header } from '../components';

export const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <Header />

      <MainLayoutContentWrapper>
        <MainLayoutContent>
          <Outlet />
        </MainLayoutContent>
      </MainLayoutContentWrapper>

      <Footer />
    </MainLayoutWrapper>
  );
};
