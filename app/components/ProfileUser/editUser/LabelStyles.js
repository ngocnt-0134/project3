import styled from 'styled-components';

export default styled('label')`
  order: 1;
  font-family: inherit;
  font-size: 1.2rem;
  padding: 0.5rem;
  transition: all 0.2s;
  display: inline-block;
  text-align: center;
  color: ${({ theme }) => theme['color-white']};
  background-color: ${({ theme }) => theme['color-secondary']};
  border-radius: 6px;
  margin-bottom: 1rem;
  font-weight: 500;
`;
