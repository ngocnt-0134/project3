import styled from 'styled-components';

export default styled('h3')`
  flex-basis: 100%;
  font-size: 1.7rem;
  border-bottom: 1px solid ${({ theme }) => theme['color-gray-dark']};
  color: ${({ theme }) => theme['color-white']};
  text-transform: capitalize;
`;
