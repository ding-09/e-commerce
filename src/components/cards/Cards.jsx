import { Card, TextBtnGroup } from './style'
import { ShopBtn } from '../buttons'

export const Hero = ({ img }) => {
  return (
    <Card>
      <picture>
        <img src={img} alt='Hero' />
      </picture>
      <TextBtnGroup>
        <h1>Express yourself.</h1>
        <ShopBtn/>
      </TextBtnGroup>
    </Card>
  );
};

export const Category = ({ category }) => {
  return (
    <>
      <div>img</div>
      <div>text</div>
      <div>button</div>
    </>
  );
};
