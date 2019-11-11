import styled from 'styled-components';
import { hide, show } from 'components/Theme/mixin';
export default styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  display: block;
  cursor: pointer;
  color: ${({ theme }) => theme['color-white']};
  ${hide}
  display:flex;
  flex-direction: column;
  justify-content: flex-start;

  &.active {
    ${show}
  }
`;
