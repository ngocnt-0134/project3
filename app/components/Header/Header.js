import styled from 'styled-components';
import { hide } from 'components/Theme/mixin';
export default styled.header`
  font-family: ${({ theme }) => theme['font-primary']};
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme['color-white']};
  flex-basis: 50rem;
  position: relative;

  &.hide {
    ${hide}
    display:none;
  }
`;
