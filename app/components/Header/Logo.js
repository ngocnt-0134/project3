import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default styled(Link)`
  display: inline-block;
  height: 6rem;
  width: 7rem;
  background-color: ${({ theme }) => theme['color-primary']};
  border-radius: 0rem 0rem 3px 3px;
  color: ${({ theme }) => theme['color-white']};
  text-align: center;
  margin-right: 2.2rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme['font-secondary']};
  text-transform: uppercase;
  line-height: 1.2;
  align-self: flex-start;
  text-decoration: none;
`;
