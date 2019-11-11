import styled from 'styled-components';

export default styled('li')`
  display: inline-block;
  transition: all 0.2s;
  margin-right: 2rem;
  color: ${({ theme }) => theme['color-black-light']};

  &.active,
  &:hover {
    color: ${({ theme }) => theme['color-primary']};
  }
`;
