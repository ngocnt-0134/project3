import styled from 'styled-components';

export default styled('div')`
  width: 46%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  align-items: center;
  margin-right: 2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme['color-white']};
  font-family: ${({ theme }) => theme['font-primary']};
`;
