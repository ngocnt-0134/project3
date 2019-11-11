import styled from 'styled-components';
import { hide } from 'components/Theme/mixin';

export default styled('select')`
  display: inline-block;
  width: 6%;
  margin-left: 8rem;
  border-radius: 3px;
  padding: 0.8rem 1rem;
  cursor: pointer;
  color: red;
  font-family: 'Heebo';

  &:focus {
    outline: none;
  }
  &.hide {
    ${hide}
  }
`;
