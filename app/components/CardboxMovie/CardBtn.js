import styled from 'styled-components';

export default styled('div')`
  display: inline-block;
  background-color: ${({ theme }) => theme['color-primary']};
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 50%;
  color: ${({ theme }) => theme['color-white']};
  font-size: 1.1rem;
  transition: all 0.2s;
`;
