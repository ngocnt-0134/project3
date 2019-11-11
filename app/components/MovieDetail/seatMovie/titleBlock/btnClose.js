import styled from 'styled-components';
export default styled('button')`
  margin-left: auto;
  border: none;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme['color-white']};
  color: ${({ theme }) => theme['color-white']};
  transition: all 0.2s;
  font-size: 1.4rem;
  cursor: pointer;
  transform: translateY(-1rem);

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme['color-white']};
    color: ${({ theme }) => theme['color-gray-dark']};
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.5);
  }
  & i {
    color: ${({ theme }) => theme['color-primary']};
    font-size: 2.5rem;
  }
  &:hover i {
    color: ${({ theme }) => theme['color-gray-dark']};
  }
`;
