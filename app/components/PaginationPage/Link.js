import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export default styled('a')`
  text-decoration: none;
  background-color: ${({ theme }) => theme['color-white']};
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  line-height: 3rem;
  font-family: ${({ theme }) => theme['font-primary']};
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme['color-primary']};
  border: 1px solid ${({ theme }) => theme['color-primary']};
  transition: all 0.2s;
  &:hover,
  &.active {
    color: ${({ theme }) => theme['color-white']};
    border: 1px solid ${({ theme }) => theme['color-primary']};
    background-color: ${({ theme }) => theme['color-primary']};
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
