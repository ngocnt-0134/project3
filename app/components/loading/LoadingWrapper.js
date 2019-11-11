import styled, { keyframes } from 'styled-components';
const loading = keyframes`
  0% {
      opacity: 1;
  }

  100% {
      opacity: 0;
  }
`;

export default styled('div')`
  position: relative;
  width: 20rem;
  height: 20rem;
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  margin: auto;
  & div {
    left: 9.4rem;
    top: 4.8rem;
    position: absolute;
    animation: ${loading} linear 1s infinite;
    background: ${({ theme }) => theme['color-primary']};
    width: 1.2rem;
    height: 2.4rem;
    border-radius: 40%;
    -webkit-transform-origin: 6px 52px;
    transform-origin: 6px 52px;
  }

  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.916666666666667s;
  }

  & div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -0.833333333333333s;
  }

  & div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.75s;
  }

  & div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.666666666666667s;
  }

  & div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.583333333333333s;
  }

  & div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.5s;
  }

  & div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.416666666666667s;
  }

  & div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.333333333333333s;
  }

  & div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.25s;
  }

  & div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.166666666666667s;
  }

  & div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.083333333333333s;
  }

  & div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
`;
