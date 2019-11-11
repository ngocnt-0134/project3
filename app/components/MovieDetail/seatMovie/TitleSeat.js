import styled from 'styled-components';

export default styled('h3')`
  flex-basis: 100%;
  height: 2rem;
  background-color: ${({ theme }) => theme['color-gray-dark']};
  line-height: 2rem;
  padding: 0 1rem;
  color: ${({ theme }) => theme['color-white']};
`;
