import styled from 'styled-components';
export default styled('h3')`
  flex-basis: 25%;
  height: 6rem;
  line-height: 6rem;
  font-size: 2.5rem;
  margin: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme['color-black-light']};
`;
