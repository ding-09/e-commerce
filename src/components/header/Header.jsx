import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { ReactComponent as ExitIcon } from '../../assets/times.svg';
import { Container, Navbar, Figure } from './style';

const Header = () => {
  // framer motion
  const variants = {
    open: { opacity: [0, 1] },
    closed: { opacity: [0, 1] },
  };

  // toggle menu open and close
  const [menu, toggleMenu] = useState(false);

  return (
    <Container>
      <Navbar>
        <motion.div
          animate={menu ? 'open' : 'closed'}
          variants={variants}
          initial={false}
          transition={{ duration: 0.3 }}
          onClick={() => {
            toggleMenu(!menu);
          }}
        >
          {menu ? <ExitIcon /> : <HiOutlineMenuAlt4 />}
        </motion.div>
        <Figure className='logo'>
          <img src={logo} alt='Logo' />
        </Figure>
        <div className='shopping-bag'>
          <MdOutlineShoppingBag />
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;
