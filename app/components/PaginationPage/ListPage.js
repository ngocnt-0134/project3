import styled from 'styled-components';
import { hide } from 'components/Theme/mixin';
export default styled('ul')`
  padding: 0 6rem;
  text-align: right;
  list-style: none;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &.hide {
    ${hide}
  }
`;
