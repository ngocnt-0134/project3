import styled from 'styled-components';
import { hide, show } from 'components/Theme/mixin';
export default styled('input')`
  display: inline-block;
  width: 100%;
  padding: 0.8rem;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme['color-gray-dark']};
  transform: all 0.2s;

  &:focus,
  &:visited {
    outline: none;
    border: 1px solid ${({ theme }) => theme['color-btn-save']};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme['color-btn-save']};
  }

  &:invalid:focus:not(:placeholder-shown) ~ div {
    ${show}
  }

  &:valid:focus:not(:placeholder-shown) ~ div {
    ${hide}
  }
  &:invalid + label + div {
    ${show};
  }
  &:valid + label,
  &[type='email'] + label {
    transform: translateY(-6.5rem);
  }

  &:placeholder-shown + label,
  &[type='email']:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3rem);
  }
`;
