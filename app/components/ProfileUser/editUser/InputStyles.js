import styled from 'styled-components';

export default styled('input')`
  display: inline-block;
  width: 100%;
  padding: 0.8rem;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme['color-gray-light']};
  transform: all 0.2s;
  order: 2;

  &:focus,
  &:visited {
    outline: none;
    border: 1px solid ${({ theme }) => theme['color-green']};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme['color-green']};
  }

  &:focus:valid + label {
    background-color: ${({ theme }) => theme['color-green']};
  }

  &:focus:invalid + label {
    background-color: ${({ theme }) => theme['color-primary']};
  }

  &:invalid,
  &:focus:invalid {
    border: 1px solid ${({ theme }) => theme['color-primary']};
  }

  &:focus:valid,
  &:valid {
    border: 1px solid ${({ theme }) => theme['color-green']};
  }
  &:disabled {
    background-color: ${({ theme }) => theme['color-gray-light']};
    border: 1px solid ${({ theme }) => theme['color-black']};
  }
`;
