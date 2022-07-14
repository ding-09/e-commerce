import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from './style';

const Main = ({ children }) => {
  const location = useLocation().pathname;
  return (
    <main>
      <Container location={location}>
        {children}
        <Outlet />
      </Container>
    </main>
  );
};

export default Main;
