import styled from 'styled-components';

export const Container = styled.div`
  background-color: #121212;
  color: #fafafa;
  display: grid;
  justify-items: center;
  padding: 4rem 0rem;
  gap: 3rem;
  nav {
    min-height: 10.5rem;
    ul {
      justify-content: space-between;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    li {
      margin-left: 1.4rem;
      a {
        display: flex;
      }
    }
  }
`;

export const Copyright = styled.p`
  opacity: 0.4;
  font-size: 1rem;
`;
