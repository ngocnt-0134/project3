/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import AlertOk from 'components/Form/AlertOk';
import FormGroup from 'components/Form/FormGroup';
import theme from 'components/Theme/index';
import Input from './InputStyles';
import Label from './LabelStyles';

const FormContent = ({
  label,
  value,
  name,
  id,
  error,
  onChangeHandleInput,
  ...rest
}) => (
  <FormGroup>
    <Input
      theme={theme}
      type={rest.type}
      placeholder={rest.placeholder}
      name={name}
      defaultValue={value}
      onChange={e => onChangeHandleInput(e)}
    />
    <Label theme={theme}>{label}</Label>
    <AlertOk theme={theme}>
      {value && !rest.validation && <i className="fas fa-check-circle" />}
    </AlertOk>
  </FormGroup>
);

FormContent.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  onChangeHandleInput: PropTypes.func,
};

export default FormContent;
