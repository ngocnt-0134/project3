import styled from 'styled-components';

export default styled('button')`
  border: none;
  display: inline-block;
  width: 4rem;
  background-color: white;
  transform: translateX(-2rem);
  color: #fe0000;
  border-radius: 10rem;
  cursor: pointer;
  & span.fa {
    font-size: 1.4rem;
  }
`;
