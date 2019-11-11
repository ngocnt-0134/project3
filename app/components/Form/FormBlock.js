import styled from 'styled-components';
import Form from 'react-validation/build/form';
export default styled(Form)`
  z-index: 3;
  width: 35%;
  font-family: 'Heebo', sans-serif;
  background: white;
  border-radius: 0.8rem;
  padding: 2rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
`;
