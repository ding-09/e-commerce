import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { ReactComponent as ExitIcon } from '../../assets/times.svg';
import { Container, Navbar, IconContainer, Figure } from './style';

const Header = () => {
  // toggle menu open and close
  const [menu, toggleMenu] = useState(false);

  return (
    <Container>
      <Navbar>
        <IconContainer onClick={() => {toggleMenu(!menu)}}>
          {menu ? <ExitIcon /> : <HiOutlineMenuAlt4 />}
        </IconContainer>
        <Figure className='logo'>
          <img src={logo} alt='Logo' />
        </Figure>
        <IconContainer className='shopping-bag'>
          <MdOutlineShoppingBag />
        </IconContainer>
      </Navbar>
    </Container>
  );
};

export default Header;
