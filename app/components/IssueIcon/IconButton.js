import styled from 'styled-components';

export default styled('i')`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #ddddddb3;
  border: 1px solid white;
  font-size: 1.2rem;
  margin-left: 0.5rem;
  position: relative;
  margin-left: 1rem;
  box-shadow: 0 0 2rem #ddddddb3;

  &::after {
    content: '\f04b';
    font-family: 'Font Awesome 5 Free';
    font-style: normal;
    font-weight: 900;
    font-size: 0.8rem;
    position: absolute;
    top: 50%;
    left: 54%;
    transform: translate(-50%, -50%);
  }
`;
