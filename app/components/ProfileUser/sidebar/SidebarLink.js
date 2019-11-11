import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { styleCommonLink } from 'components/Theme/mixin';
export default styled(Link)`
  ${styleCommonLink}
  &:link,
  &:visited {
    color: inherit;
  }
  color: ${({ theme }) => theme['color-black-light']};
`;
