import styled from 'styled-components';

export default styled('li')`
  & {
    padding: 1rem 1rem;
    width: 15rem;
    font-size: 1.4rem;
    text-align: center;
    margin: 0 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    text-transform: uppercase;
  }
  &.item1 {
    background-color: ${({ theme }) => theme['color-primary-light']};
  }

  &.item2 {
    background-color: ${({ theme }) => theme['color-secondary']};
  }

  &.item3 {
    background-color: ${({ theme }) => theme['color-btn-save']};
  }
  & i {
    font-size: 1.6rem;
    transform: translateY(-2px);
  }
`;
