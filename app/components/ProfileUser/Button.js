import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styleCommonLink } from 'components/Theme/mixin';
export default styled(Link, 'button')`
  &:link,
  &:visited {
    ${styleCommonLink}
    width: 4rem;
    height: 4rem;
    margin-left: auto;
    border-radius: 50%;
    line-height: 4rem;
    background-color: ${({ theme, bg }) => bg || theme['color-btn-edit']};
    font-size: 1.5rem;
    color: ${({ theme, color }) => color || theme['color-white']};
    transition: all 0.2s;
    box-shadow: ${({ theme }) => theme['shadow-one']};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme['shadow-two']};
  }
`;
