import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';

import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetailsPage from './pages/product-details';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<HomePage />} />
            <Route path='products'>
              <Route path='id/:productId' element={<ProductDetailsPage/>}/>
              <Route path=':category' element={<ProductsPage />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
