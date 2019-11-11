import styled from 'styled-components';

export default styled('label')`
  display: block;
  text-align: center;
  margin-top: 3rem;
  font-size: 3.1rem;
  background-color: ${({ theme }) => theme['color-secondary']};
  color: ${({ theme }) => theme['color-white']};
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme['shadow-one']};
  transition: all 0.2s;

  &:hover {
    box-shadow: ${({ theme }) => theme['shadow-two']};
    transform: translateY(-0.4rem);
  }
`;
