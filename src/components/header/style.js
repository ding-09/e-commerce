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
  nav {
    position: fixed;
    top: 5.5rem;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    border-top: 1px solid rgba(40, 40, 40, 0.2);
    ul {
      padding: 2.4rem;
      min-width: 100%;
      align-items: flex-start;
      li {
        border-bottom: 1px solid rgba(40, 40, 40, 0.15);
        min-width: 100%;
        padding-bottom: 1.2rem;
        margin-bottom: 1.2rem;
        a {
          font-size: 1.6rem;
          color: rgba(40, 40, 40, 0.7);
        }
      }
    }
  }
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
`;
