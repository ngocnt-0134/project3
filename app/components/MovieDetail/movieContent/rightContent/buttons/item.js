import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { hide } from 'components/Theme/mixin';
export default styled('button')`
  &,
  &:link,
  &:visited {
    display: inline-block;
    background-color: ${({ theme }) => theme['color-gray-blur']};
    padding: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme['color-white']};
    font-size: 1.2rem;
    transition: all 0.2s;
    border-radius: 3px;
    border: none;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme['color-yellow']};
  }
  &.success {
    background-color: ${({ theme }) => theme['color-btn-save']};
  }
  &.hide {
    ${hide}
  }

  &:not(:first-child) {
    margin-left: 3rem;
  }
`;
