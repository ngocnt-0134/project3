import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default styled(Link)`
  display: inline-block;
  & img {
    transition: all 0.2s;
  }
  &:not(:last-child) {
    margin-right: 2rem;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;
