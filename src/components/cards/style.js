import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  &:before {
    content: '';
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .text-btn-group {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1,
    h2 {
      color: #fafafa;
    }
  }
`;

export const HeroCard = styled(Card)`
  .text-btn-group {
    bottom: 8rem;
    h1 {
      text-transform: lowercase;
      font-size: 2.4rem;
      margin-bottom: 3.2rem;
    }
  }
`;

export const CategoryCard = styled(Card)`
  .text-btn-group {
    bottom: 6rem;
    h2 {
      font-size: 2.2rem;
      text-align: center;
      margin-bottom: 3rem;
      white-space: pre-line;
    }
  }
`;
