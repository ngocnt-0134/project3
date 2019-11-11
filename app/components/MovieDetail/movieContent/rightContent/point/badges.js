import styled from 'styled-components';

export default styled('span')`
  padding: 0.1rem 1rem;
  background-color: ${({ bg }) => bg || 'white'};
  color: white;
  border-radius: 5px;
  margin-right: 1rem;
`;
