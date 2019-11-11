import styled from 'styled-components';
export default styled('div')`
  flex: 0 1 6rem;
  height: 4rem;
  background-color: ${({ theme }) => theme['color-primary-light']};
  margin-top: 1rem;
  margin: 1rem 0;
  margin-left: 3.35rem;
  border-radius: 6px;
  text-align: center;
  line-height: 4rem;
  font-size: 2rem;
  color: ${({ theme }) => theme['color-white']};
  position: relative;
`;
