import styled from 'styled-components';

export default styled('h2')`
  flex-basis: 100%;
  display: inline-block;
  font-size: 2rem;
  color: ${({ theme }) => theme['color-white']};
  text-transform: capitalize;
  margin: 0;
`;
