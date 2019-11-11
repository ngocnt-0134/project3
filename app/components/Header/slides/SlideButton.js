import styled from 'styled-components';

export default styled('button')`
  display: inline-block;
  font-family: inherit;
  width: 12%;
  background-color: ${({ theme }) => theme['color-primary']};
  border: none;
  border-radius: 10rem;
  font-size: 1.3rem;
  padding: 1rem 2rem;
  color: inherit;
  font-weight: 600;
  transition: all 0.1s;
  margin-top: 2.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:active {
    outline: none;
  }
`;
