import styled from 'styled-components';
export default styled('div')`
  transform: translateY(-5.5rem) translateX(-1rem);
  font-size: 2.4rem;
  display: block;
  color: ${({ theme }) => theme['color-btn-save']};
  transition: all 0.2s;
  text-align: right;
`;
