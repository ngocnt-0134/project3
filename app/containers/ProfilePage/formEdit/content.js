/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import AlertForm from 'components/Form/AlertForm';
import FormGroup from 'components/ProfileUser/editUser/FormGroup';
import Input from 'components/ProfileUser/editUser/InputStyles';
import Label from 'components/ProfileUser/editUser/LabelStyles';
import theme from 'components/Theme/index';

const FormEditContent = ({
  value,
  label,
  name,
  id,
  onChangeHandleInput,
  ...rest
}) => (
  // console.log(rest);
  <FormGroup theme={theme}>
    <Input
      theme={theme}
      type={rest.type}
      placeholder={rest.placeholder}
      name={name}
      id={id}
      required
      defaultValue={value || 'N/a'}
      onChange={e => onChangeHandleInput(e)}
      disabled={rest.disabled}
    />
    <Label htmlFor={name} theme={theme}>
      {label}
    </Label>
    <AlertForm theme={theme}> {rest.validation}</AlertForm>
  </FormGroup>
);
FormEditContent.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChangeHandleInput: PropTypes.func,
};

export default FormEditContent;
