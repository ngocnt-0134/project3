import styled from 'styled-components';

export default styled('button')`
  font-size: 1.4rem;
  text-transform: uppercase;
  width: 100%;
  border: none;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme['color-secondary']};
  color: ${({ theme }) => theme['color-white']};
  border-radius: 3px;
  margin: 0.5rem 0px 2.2rem 0px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme['color-white']};
    color: ${({ theme }) => theme['color-primary']};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  }
  &:disabled {
    background-color: ${({ theme }) => theme['color-gray-dark']};
  }
`;
