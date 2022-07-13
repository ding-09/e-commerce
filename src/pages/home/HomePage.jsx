import React from 'react';
import heroImg from '../../assets/mobile/hero.jpg';
import { Hero, Category } from '../../components/cards';
import categories from './categories';
import { Home } from './style';


const HomePage = () => {
  return (
    <Home>
      <section className='hero'>
        <Hero img={heroImg}></Hero>
      </section>
      <section className='category'>
        {categories.map((category, index) => <Category img={category.img} heading={category.heading} key={index}/>)}
      </section>
    </Home>
  );
};

export default HomePage;
