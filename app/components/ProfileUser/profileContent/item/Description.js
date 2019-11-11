import styled from 'styled-components';

export default styled('span')`
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  display: block;
  color: ${({ theme }) => theme['color-black-light']};
`;
