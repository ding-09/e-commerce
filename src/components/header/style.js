import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2.4rem;
  min-height: 5.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.15);
  color: #1b1b1b;
`;

export const NavContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border: none;
    background: none;
  }
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
`;
