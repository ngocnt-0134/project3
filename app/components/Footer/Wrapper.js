import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme['color-black-light']};
`;

export default Wrapper;
