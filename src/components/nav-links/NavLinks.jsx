import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from './style';

const NavLinks = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to='women'>Women</NavLink>
        </li>
        <li>
          <NavLink to='men'>Men</NavLink>
        </li>
        <li>
          <NavLink to='jewelry'>Jewelry</NavLink>
        </li>
        <li>
          <NavLink to='electronics'>Electronics</NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default NavLinks;
