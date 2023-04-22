import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
          <AppBar />
          <main>
          <Suspense fullback={null}>
              <Outlet />
              </Suspense>
              </main>
      <GlobalStyle />
    </>
  );
};
