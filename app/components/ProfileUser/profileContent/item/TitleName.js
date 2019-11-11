import styled from 'styled-components';

export default styled('h4')`
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme['color-white']};
  display: inline-block;
  background-color: ${({ theme }) => theme['color-secondary']};
  border-radius: 3px;
  padding: 0 1rem;
`;
