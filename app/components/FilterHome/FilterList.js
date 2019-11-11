import styled from 'styled-components';
import { hide } from 'components/Theme/mixin';
export default styled('ul')`
  width: 100%;
  height: 20rem;
  padding: 4.5rem 0;
  margin: 0;
  display: flex;
  align-items: flex-end;
  background-color: #ffeeee;
  justify-content: center;

  &.hide {
    ${hide}
  }
`;
