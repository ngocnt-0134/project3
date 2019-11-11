import styled from 'styled-components';
import { hide } from 'components/Theme/mixin';
export default styled('button')`
  width: 10%;
  margin: auto;
  padding: 0.5rem 0.8rem;
  border-radius: 10rem;
  border: none;
  background-color: ${({ theme }) => theme['color-secondary']};
  box-shadow: ${({ theme }) => theme['shadow-one']};
  cursor: pointer;
  transition: all 0.2s;
  display: inline-block;
  color: ${({ theme }) => theme['color-white']};
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme['shadow-two']};
    transform: translateY(-0.4rem);
  }
  &.hide {
    ${hide}
    display:none;
  }
`;
