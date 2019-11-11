import styled from 'styled-components';
// import { positionMixin } from 'components/Theme/mixin';

// export default styled('div')`
//   ${positionMixin}
//   width: 50%;
//   height: auto;
//   background-color: ${({ theme }) => theme['color-white']};
//   z-index: 6;
//   border-radius: 1rem;
//   box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
//   overflow: hidden;
//   text-transform: capitalize;
// `;
export default styled('form')`
  height: auto;
  background-color: ${({ theme }) => theme['color-white']};
  box-shadow: ${({ theme }) => theme['shadow-three']};
  flex-basis: 74%;
  overflow: hidden;
  display: block;
`;
