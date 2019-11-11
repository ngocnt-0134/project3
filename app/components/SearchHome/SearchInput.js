import styled from 'styled-components';

export default styled('input')`
  display: inline-block;
  width: 32%;
  padding: 1.3rem;
  height: 4rem;
  border-radius: 10rem 0 0 10rem;
  -ms-transform: translateY(-1.5rem);
  border: none;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  font-size: 1.4rem;

  &::-webkit-input-placeholder {
    color: #fe0000;
    font-weight: 900;
    font-size: 1.4rem;
    font-family: 'Heebo', sans-serif;
  }
  &:focus,
  &:visited {
    outline: none;
  }
`;
