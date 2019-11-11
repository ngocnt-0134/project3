import styled from 'styled-components';
import Logo from 'components/Header/Logo';
export default styled(Logo)`
  position: absolute;
  top: 0rem;
  left: 6rem;
  margin: 0;
  z-index: 7;
  background-color: ${({ theme }) => theme['color-primary']};
  text-decoration: none;
  cursor: pointer;
`;
