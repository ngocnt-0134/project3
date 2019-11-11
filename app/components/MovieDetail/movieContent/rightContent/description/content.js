import styled from 'styled-components';

export default styled('p')`
  line-height: 1.7;
  color: ${({ theme }) => theme['color-gray-dark']};
  font-family: inherit;
  margin: 0;
`;
