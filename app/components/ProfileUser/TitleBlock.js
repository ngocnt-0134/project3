import styled from 'styled-components';

export default styled('div')`
  display: flex;
  padding: 2rem;
  border-bottom: 1px solid #a99696;
  background-color: ${({ theme }) => theme['color-secondary']};
  color: ${({ theme }) => theme['color-white']};
  text-transform: capitalize;
  align-items: center;
`;
