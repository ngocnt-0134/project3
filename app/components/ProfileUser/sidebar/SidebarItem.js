import styled from 'styled-components';

export default styled('li')`
  display: block;
  padding: 1rem;
  transition: all 0.2s;
  &:not(:last-child) {
    border-bottom: 1px solid #bbb5b5;
  }
  &:hover {
    border-bottom: 3px solid #bbb5b5;
  }
`;
