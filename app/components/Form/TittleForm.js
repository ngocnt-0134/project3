import styled from 'styled-components';

export default styled('h2')`
  margin: 0;
  font-size: 4.4rem;
  padding: 1rem;
  color: ${({ theme }) => theme['color-secondary']};
  text-align: center;
  border-radius: 3px;
`;
