import styled from 'styled-components';

export default styled('span')`
  margin-right: 1rem;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme['color-gray-dark']};
`;
