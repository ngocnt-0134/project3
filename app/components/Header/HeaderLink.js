import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  &:link,
  &:visited {
    display: inline-block;
    padding: 0 1.3rem;
    text-decoration: none;
    user-select: none;
    font-family: ${({ theme }) => theme['font-secondary']};
    cursor: pointer;
    outline: 0;
    font-weight: 400;
    font-size: 1.2rem;
    color: ${({ theme }) => theme['color-white']};
    text-transform: uppercase;
    transition: all 0.2s;
  }

  &:active,
  &.active {
    color: ${({ theme }) => theme['color-primary']};
  }

  &:hover {
    color: ${({ theme }) => theme['color-primary']};
  }
  &:first-child {
    margin-left: 3.05rem;
  }

  &.right,
  &.alone {
    &:link,
    &:visited {
      font-size: 1.8rem;
      font-weight: 900;
      margin-left: auto;
      letter-spacing: 0.3rem;
      color: ${({ theme }) => theme['color-secondary']};
      padding: 1rem;
      background-color: #ffffff8c;
      border-radius: 4px;
      text-transform: capitalize;
    }

    &:hover {
      color: ${({ theme }) => theme['color-primary']};
      background-color: ${({ theme }) => theme['color-white']};
    }

    &.right:last-of-type {
      margin-left: 2px;
    }
  }
`;
