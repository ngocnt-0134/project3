import styled from 'styled-components';

export default styled('button')`
  border: none;
  color: inherit;
  background-color: ${({ theme }) => theme['color-secondary-light']};
  width: 4rem;
  font-size: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme['color-secondary']};
  }
  &.btn--prev {
    border-radius: 3rem 0 0 3rem;
  }
  &.btn--next {
    border-radius: 0 3rem 3rem 0;
  }
`;
