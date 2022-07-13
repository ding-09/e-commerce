import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { ReactComponent as ExitIcon } from '../../assets/times.svg';
import { Container, NavContainer, Figure } from './style';
import NavLinks from '../nav-links';

const Header = () => {
  // framer motion
  const variants = {
    open: { opacity: [0, 1] },
    closed: { opacity: [0, 1] },
  };

  // toggle menu open and close
  const [menu, toggleMenu] = useState(false);

  // disable scroll when menu is opened 
  useEffect(() => {
    menu
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [menu]);

  return (
    <header>
      <Container>
        <NavContainer>
          <motion.button
            animate={menu ? 'open' : 'closed'}
            variants={variants}
            initial={false}
            transition={{ duration: 0.3 }}
            onClick={() => {
              toggleMenu(!menu);
            }}
          >
            {menu ? <ExitIcon /> : <HiOutlineMenuAlt4 />}
          </motion.button>
          {menu && <NavLinks />}
          <Figure>
            <img src={logo} alt='Logo' />
          </Figure>
          <button className='shopping-bag'>
            <MdOutlineShoppingBag />
          </button>
        </NavContainer>
      </Container>
    </header>
  );
};

export default Header;
