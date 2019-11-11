import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default styled(Link)`
  display: inline-block;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 6rem;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  transition: all 0.2s;

  &:hover button {
    background-color: ${({ theme }) => theme['color-white']};
    color: ${({ theme }) => theme['color-primary']};
  }
  &:hover button i {
    background-color: ${({ theme }) => theme['color-white']};
    border: 1px solid ${({ theme }) => theme['color-primary']};
    font-size: 1.1rem;
  }
`;
