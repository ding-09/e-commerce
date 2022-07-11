import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      font-weight: 600;
      color: ${(props) => props.color ?? '#1b1b1b'};
    }
  }
`;
