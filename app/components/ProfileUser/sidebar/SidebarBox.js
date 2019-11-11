import styled from 'styled-components';

export default styled('div')`
  flex-basis: 25%;
  height: 100%;
  color: ${({ theme }) => theme['color-black-light']};
  display: flex;
  flex-direction: column;
  padding: 3rem;
  text-align: center;
  text-transform: capitalize;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme['shadow-three']};
`;
