import React from 'react';
import logo from '../../assets/logo.svg';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Container, Navbar } from './style';

const Header = () => {
  return (
    <Container>
      <Navbar>
        <div className='menu'>
          <HiOutlineMenuAlt4/>
        </div>
        <figure className='logo'>
          <img src={logo} alt='Logo' />
        </figure>
        <div className='shopping-bag'>
          <MdOutlineShoppingBag />
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;
