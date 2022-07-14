import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from './style';

const NavLinks = ({ fontColor }) => {
  return (
    <Nav color={fontColor}>
      <ul>
        <li>
          <NavLink to='products/women'>Women</NavLink>
        </li>
        <li>
          <NavLink to='products/men'>Men</NavLink>
        </li>
        <li>
          <NavLink to='products/jewelry'>Jewelry</NavLink>
        </li>
        <li>
          <NavLink to='products/electronics'>Electronics</NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default NavLinks;
