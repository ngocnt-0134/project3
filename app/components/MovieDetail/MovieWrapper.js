import styled from 'styled-components';
// import { positionFix } from '../Theme/mixin';

export default styled('div')`
  width: 100%;
  height: 100%;
  background-image: url(${({ bg }) => bg || 'white'});
  background-size: cover;
  background-attachment: fixed;
  background-color: ${({ theme }) => theme['color-black-dark']};
  background-blend-mode: soft-light;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-direction: column;
  padding: 4rem 6rem;
  font-family: ${({ theme }) => theme['font-primary']};
`;
