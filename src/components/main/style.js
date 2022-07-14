import styled from 'styled-components';

export const Container = styled.div`
  margin: ${(props) => (props.location === '/' ? '' : '3.2rem 2.4rem auto')};
`;
