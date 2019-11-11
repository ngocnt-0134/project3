/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { memo } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import FormWrapper from 'components/Form/FormWrapper';
import FormBlock from 'components/Form/FormBlock';
import FormGroup from 'components/Form/FormGroup';
import CloseButton from 'components/Form/CloseButton';
import TittleForm from 'components/Form/TittleForm';
import SubmitButton from 'components/Form/SubmitButton';
import FormContent from 'components/Input';
import AlertForm from 'components/Form/AlertForm';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import theme from 'components/Theme/index';
import bg from './bg.jpg';

import { makeSelectRegister } from './selector';
import reducer from './reducer';
import saga from './saga';
import { register } from './actions/index';

// const delay = ms => new Promise(_ => setTimeout(_, ms));
function RegisterContainer({ onSubmitForm, history }) {
  const key = 'register';

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string()
        .email('Invalid email addresss`')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more ')
        .label('Password')
        .required('Required'),
      passwordConfirm: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match',
      ),
    }),
    onSubmit: values => {
      onSubmitForm(values);
      history.replace('/login');
    },
  });
  return (
    <FormWrapper bg={bg}>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Register">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <FormBlock onSubmit={formik.handleSubmit}>
        <TittleForm theme={theme}>Register</TittleForm>
        <CloseButton to="/" theme={theme}>
          <i className="fas fa-window-close" />
        </CloseButton>
        <FormContent
          label="User name*"
          name="name"
          id="username"
          validation={formik.errors.name}
          value={formik.values.name}
          type="text"
          placeholder="Your Name..."
          onChangeHandleInput={formik.handleChange}
        />
        <AlertForm theme={theme}>{formik.errors.name}</AlertForm>
        <FormContent
          label="Email ID*"
          name="email"
          id="email"
          validation={formik.errors.email}
          value={formik.values.email}
          type="text"
          placeholder="Your Email..."
          onChangeHandleInput={formik.handleChange}
        />
        <AlertForm theme={theme}>{formik.errors.email}</AlertForm>
        <FormContent
          label="Password"
          name="password"
          id="password"
          validation={formik.errors.password}
          value={formik.values.password}
          type="password"
          placeholder="Password"
          onChangeHandleInput={formik.handleChange}
        />
        <AlertForm theme={theme}>{formik.errors.password}</AlertForm>
        <FormContent
          label="Password Confirm"
          name="passwordConfirm"
          id="passwordConfirm"
          validation={formik.errors.passwordConfirm}
          value={formik.values.passwordConfirm}
          type="password"
          placeholder="Password Confirm"
          onChangeHandleInput={formik.handleChange}
        />
        <AlertForm theme={theme}>{formik.errors.passwordConfirm}</AlertForm>
        <FormGroup>
          <SubmitButton
            // disabled={formik.errors && !formik.dirty}
            theme={theme}
            type="submit"
            bg={theme['color-secondary']}
          >
            Register
          </SubmitButton>
        </FormGroup>
      </FormBlock>
    </FormWrapper>
  );
}

RegisterContainer.propTypes = {
  onSubmitForm: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  data: makeSelectRegister(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: data => {
      dispatch(register(data));
    },
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RegisterContainer);
