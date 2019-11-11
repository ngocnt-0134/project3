import styled from 'styled-components';

export default styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(${({ bg }) => bg || 'white'});
  background-size: 100%;
  z-index: 4;
`;
