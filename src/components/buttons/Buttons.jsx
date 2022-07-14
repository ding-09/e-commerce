import { StyledShopBtn } from './style';
import { CgArrowRight } from 'react-icons/cg';

export const ShopBtn = () => {
  return (
    <StyledShopBtn as='a' href='all'>
      <span className='btn-text'>Shop Now</span>
      <CgArrowRight />
    </StyledShopBtn>
  );
};
