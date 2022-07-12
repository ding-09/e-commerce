import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  &:before {
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const TextBtnGroup = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #fafafa;
    text-transform: lowercase;
    margin-bottom: 3rem;
  }
`;
