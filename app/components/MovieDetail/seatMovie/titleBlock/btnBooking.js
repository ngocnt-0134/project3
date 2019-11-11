import styled from 'styled-components';
import { positionAbsoMax } from '../../../Theme/mixin';

export default styled('button')`
  ${positionAbsoMax}
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme['color-secondary']};
  color: ${({ theme }) => theme['color-white']};
  border-radius: 6px;
  font-size: 2rem;
  transition: all 0.2s;

  &.success {
    background-color: ${({ theme }) => theme['color-btn-save']};
    font-size: 2rem;
  }
  &:disabled,
  &:disabled:hover {
    background-color: ${({ theme }) => theme['color-primary-light']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['color-btn-save']};
  }
  &:focus {
    outline: none;
  }
`;
