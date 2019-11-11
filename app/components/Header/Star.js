import styled from 'styled-components';
import star from './star.png';
export default styled.span`
  display: block;
  background-image: url(${star});
  width: 2.4rem;
  height: 2rem;
  margin: 0 auto;
  transform: translateX(-2px);
  background-size: cover;
  margin-bottom: 5px;
`;
