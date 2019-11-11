import styled from 'styled-components';
import IconButton from '../../IssueIcon/IconButton';

export default styled(IconButton)`
  background-color: #fe0000;
  transition: all 0.2s;
  border: 1px solid #fe0000;
  margin: 0;
  cursor: pointer;

  &:active,
  &:hover {
    background-color: #fff;
    border: 1px solid #fff;
  }

  &:hover::after {
    content: '\f04b';
    color: #fe0000;
  }
`;
