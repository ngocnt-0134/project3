const formData = {};
export const handleChangeInput = e => {
  const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
  const { name } = e.target;
  formData[name] = value;
};

export default formData;

export function handleValidation(setErrors, data) {
  const fields = data;
  const errors = {};
  let formIsValid = true;
  // Name
  if (!fields.name) {
    formIsValid = false;
    errors.name = 'Cannot be empty';
  } else {
    formIsValid = true;
    errors.name = '';
  }
  if (typeof fields.name !== 'undefined') {
    if (!fields.name.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.name = 'Only letters';
    }
  }

  // Email
  if (!fields.email) {
    formIsValid = false;
    errors.email = 'Cannot be empty';
  } else {
    formIsValid = true;
    errors.name = '';
  }

  if (typeof fields.email !== 'undefined') {
    const lastAtPos = fields.email.lastIndexOf('@');
    const lastDotPos = fields.email.lastIndexOf('.');

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        fields.email.indexOf('@@') === -1 &&
        lastDotPos > 2 &&
        fields.email.length - lastDotPos > 2
      )
    ) {
      formIsValid = false;
      errors.email = 'Email is not valid';
    } else {
      formIsValid = true;
      errors.email = '';
    }
  }
  // Check password
  if (!fields.password) {
    formIsValid = false;
    errors.password = 'Cannot be empty';
  } else {
    formIsValid = true;
    errors.password = '';
  }

  if (fields.password !== fields.confpassword) {
    formIsValid = false;
    errors.confpassword = 'Password and ConfPassword not equal';
  }
  if (!fields.confpassword) {
    formIsValid = false;
    errors.password = 'Cannot be empty';
  }
  if (fields.password === fields.confpassword) {
    formIsValid = true;
    errors.confpassword = '';
  }
  setErrors(errors);
  return formIsValid;
}
