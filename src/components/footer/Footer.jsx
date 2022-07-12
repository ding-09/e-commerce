import React from 'react';
import NavLinks from '../nav-links';
import { ReactComponent as Logo } from '../../assets/footer-logo.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as PinterestIcon } from '../../assets/icons/pinterest.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg';
import { Container, Socials, Copyright } from './style';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Logo />
        <NavLinks fontColor='#fafafa' />
        <Socials>
          <ul>
            <li>
              <a href='#'>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <InstagramIcon />
              </a>
            </li>{' '}
            <li>
              <a href='#'>
                <PinterestIcon />
              </a>
            </li>{' '}
            <li>
              <a href='#'>
                <YoutubeIcon />
              </a>
            </li>
          </ul>
        </Socials>
        <Copyright>Copyright 2022. All rights reserved</Copyright>
      </Container>
    </footer>
  );
};

export default Footer;
