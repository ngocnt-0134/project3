import styled from 'styled-components';
import { positionFix } from 'components/Theme/mixin';
export default styled('div')`
  ${positionFix}
  background-color: ${({ theme }) => theme['color-white']};
  z-index: 5;
  transition: all 0.2s;
  display:flex;
`;
