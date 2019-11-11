import styled from 'styled-components';
export default styled('div')`
  height: 16rem;
  padding: 2rem;
  background-image: url(${props => props.bg || 'red'});
  background-size: cover;
  border-radius: 0.5rem;
  background-position-y: -6rem;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.2);
  margin-right: 2rem;
  flex-basis: 28rem;
  transform: translateY(5.5rem);
  text-decoration: none;
  color: ${({ theme }) => theme['color-gray-light']};

  display: flex;
  align-items: flex-end;

  &:hover div i {
    background-color: ${({ theme }) => theme['color-white']};
    border: 1px solid ${({ theme }) => theme['color-white']};
  }
  &:hover div i::after {
    content: '\f04b';
    color: ${({ theme }) => theme['color-primary']};
  }
`;
