import styled from 'styled-components';

export default styled('label')`
  display: inline-block;
  font-size: inherit;
  font-family: ${({ theme }) => theme['font-primary']};
  color: ${({ theme }) => theme['color-black-light']};
  font-weight: 500;
  transition: all 0.2s;
`;
