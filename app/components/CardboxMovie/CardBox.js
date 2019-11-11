import styled, { keyframes } from 'styled-components';
const animation = keyframes`
  from {
    transform:scale(0.8);
  }
  to{
    transform: scale(1);
  }
`;
export default styled('div')`
  display: block;
  width: 18%;
  max-height: 34rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  margin-bottom: 10rem;
  /* margin-left: 2rem; */
  text-decoration: none;
  color: ${({ theme }) => theme['color-black-light']};
  transition: all 0.2s;
  animation: ${animation} 0.5s forwards;
  margin-left: 2rem;
`;
