import React from 'react';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';

import HomePage from './pages/home';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <HomePage />
      </Main>
      <Footer />
    </>
  );
};

export default App;
