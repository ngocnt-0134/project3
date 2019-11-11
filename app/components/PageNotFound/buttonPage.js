import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default styled(Link)`
  &:link,
  &:visited,
  & {
    font-size: 1.5rem;
    border: none;
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 10rem;
    background-color: ${({ theme }) => theme['color-secondary']};
    color: ${({ theme }) => theme['color-white']};
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s;
    cursor: pointer;
    letter-spacing: 0.2rem;
    box-shadow: ${({ theme }) => theme['shadow-one']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['color-white']};
    box-shadow: ${({ theme }) => theme['shadow-two']};
    color: ${({ theme }) => theme['color-black-light']};
  }
`;
