import styled from 'styled-components';

export default styled('button')`
  position: absolute;
  top: 0%;
  right: 0;
  display: inline-block;
  border: none;
  background-color: #00000017;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s;

  &:focus,
  &:hover {
    outline: none;
    background-color: #c7c5c5b3;
  }
  & i {
    transform: translateX(-5px);
  }
  &:hover i {
    color: #fe0000;
  }
`;
