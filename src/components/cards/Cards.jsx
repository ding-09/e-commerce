import { HeroCard, CategoryCard } from './style';
import { ShopBtn } from '../buttons';

export const Hero = ({ img }) => {
  return (
    <HeroCard>
      <picture>
        <img src={img} alt='Hero' />
      </picture>
      <div className='text-btn-group'>
        <h1>Express yourself.</h1>
        <ShopBtn />
      </div>
    </HeroCard>
  );
};

export const Category = ({ img, heading }) => {
  return (
    <CategoryCard>
      <picture>
        <img src={img} alt='Hero' />
      </picture>
      <div className='text-btn-group'>
        <h2>{heading}</h2>
        <ShopBtn />
      </div>
    </CategoryCard>
  );
};
