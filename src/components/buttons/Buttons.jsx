import { StyledShopBtn } from './style';
import { CgArrowRight } from 'react-icons/cg';

export const ShopBtn = () => {
  return (
    <StyledShopBtn>
      <span className='btn-text'>Shop Now</span>
      <CgArrowRight />
    </StyledShopBtn>
  );
};
