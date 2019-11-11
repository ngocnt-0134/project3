import styled from 'styled-components';

export default styled('span')`
  font-size: 1.2rem;
  color: white;
  display: inline-block;

  &:not(:first-of-type) {
    margin-left: 2rem;
  }
`;
