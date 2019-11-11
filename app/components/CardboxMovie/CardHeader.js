import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default styled(Link)`
  &:link,
  &:visited {
    display: block;
    flex-basis: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme['shadow-one']};
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme['color-black-light']};
  }

  &:hover div div {
    background-color: ${({ theme }) => theme['color-white']};
    color: ${({ theme }) => theme['color-primary']};
  }
`;
