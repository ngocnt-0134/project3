import styled from 'styled-components';

export default styled('div')`
  width: 100%;
  height: 2rem;
  font-size: 1.2rem;
  transform: translateY(-5rem);
  transition: all 0.2s;
  color: ${({ theme }) => theme['color-primary-light']};
  display: inline-block;

  & i {
    float: right;
    transform: translateY(-3.8rem) translateX(-1rem);
    font-size: 2.5rem;
    color: ${({ theme }) => theme['color-btn-save']};
  }
`;
