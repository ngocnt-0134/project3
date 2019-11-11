import styled from 'styled-components';

export default styled('div')`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme['font-primary']};
  color: ${({ theme }) => theme['color-black-light']};
`;
