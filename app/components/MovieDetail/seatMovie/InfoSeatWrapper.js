import styled from 'styled-components';
import { hide, show } from 'components/Theme/mixin';

export default styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  justify-content: center;
  z-index: 8;
  padding: 2rem;
  border-radius: 1rem;
  transition: all 0.2s;
  flex-wrap: wrap;

  &.hide {
    ${hide}
    display: none;
    transform: translateX(-50%, -50%) scale(0.8);
  }
  &.show {
    ${show}
    transform: translateX(-50%, -50%) scale(0.1);
  }
`;
