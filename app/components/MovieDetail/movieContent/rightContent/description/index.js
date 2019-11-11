import styled from 'styled-components';

export default styled('div')`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme['font-primary']};
  display: flex;
  flex-wrap: wrap;
`;
