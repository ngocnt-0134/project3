import styled from 'styled-components';

export default styled('button')`
  min-width: 50%;
  padding: 0.8rem;
  border: none;
  color: ${({ theme }) => theme['color-white']};
  border-radius: 6px;
  background-color: ${({ theme }) => theme['color-btn-save']};
  box-shadow: ${({ theme }) => theme['shadow-one']};
  transition: all 0.2s;
  cursor: pointer;
  margin-left: auto;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: ${({ theme }) => theme['shadow-two']};
    transform: translateY(-0.4rem);
  }
`;
