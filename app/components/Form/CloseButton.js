import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default styled(Link)`
  display: inline-block;
  text-align: center;
  font-size: 3.2rem;
  border-radius: 3px;
  transition: all 0.2s;
  color: ${({ theme }) => theme['color-primary']};
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 3;

  & i {
    display: inline-block;
  }

  &:hover {
    color: ${({ theme }) => theme['color-gray-dark']};
  }
`;
