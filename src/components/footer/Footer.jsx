import React from 'react';
import { ReactComponent as Logo } from '../../assets/footer-logo.svg';
import { Container } from './style';

const Footer = () => {
  return (
    <footer>
      <Container>
        <figure>
          <Logo />
        </figure>
        
        nav social copyright
      </Container>
    </footer>
  );
};

export default Footer;
