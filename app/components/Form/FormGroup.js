import styled from 'styled-components';

export default styled('div')`
  width: 100%;
  height: 7rem;
  font-family: 'Heebo', sans-serif;
  font-size: 1.4rem;

  &:first-of-type {
    margin-top: 2rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 2.5rem;
  }
`;
