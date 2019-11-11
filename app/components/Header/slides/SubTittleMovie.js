import styled from 'styled-components';

export default styled('span')`
  font-size: 1.7rem;
  font-weight: 500;
  display: inline-flex;
  &:not(:first-of-type) {
    margin-left: 4rem;
  }
`;
