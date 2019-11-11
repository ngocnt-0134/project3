import styled from 'styled-components';
import bg from 'images/bg-text.png';
export default styled('h2')`
  font-size: 14rem;
  margin: 0;
  -webkit-text-stroke-width: 0.1rem;
  -webkit-text-stroke-color: ${({ theme }) => theme['color-gray-light']};
  letter-spacing: 1rem;
  font-weight: 900;
  background-image: url(${bg});
  background-size: 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
