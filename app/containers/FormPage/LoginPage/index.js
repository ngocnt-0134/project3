import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';

import { useFormik } from 'formik';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormWrapper from 'components/Form/FormWrapper';
import AlertForm from 'components/Form/AlertForm';
import FormBlock from 'components/Form/FormBlock';
import FormGroup from 'components/Form/FormGroup';
import CloseButton from 'components/Form/CloseButton';
import TittleForm from 'components/Form/TittleForm';
import SubmitButton from 'components/Form/SubmitButton';
import FormContent from 'components/Input';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import theme from 'components/Theme/index';
import bg from './bg.jpg';

import { loginAuth } from './actions/index';
// import { makeSelectLogin } from './selector';
import reducer from './reducer';
import saga from './saga';

function LoginContainer({ onSubmitForm }) {
  const key = 'login';
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email addresss`')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be  characters or more')
        .required('Required'),
    }),
    onSubmit: values => {
      onSubmitForm(values);
    },
  });
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <FormWrapper bg={bg}>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Login">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <FormBlock onSubmit={formik.handleSubmit}>
        <TittleForm theme={theme}>Login</TittleForm>
        <CloseButton to="/" theme={theme}>
          {' '}
          <i className="fas fa-window-close" />
        </CloseButton>
        <FormContent
          label="Email ID*"
          name="email"
          id="email"
          validation={formik.errors.email}
          value={formik.values.email}
          type="email"
          placeholder="Your Email... "
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
          placeholder="password"
          onChangeHandleInput={formik.handleChange}
        />
        <AlertForm theme={theme}>{formik.errors.password}</AlertForm>
        <FormGroup>
          <SubmitButton theme={theme}>Login</SubmitButton>
        </FormGroup>
      </FormBlock>
    </FormWrapper>
  );
}

LoginContainer.propTypes = {
  onSubmitForm: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: data => {
      dispatch(loginAuth(data));
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
)(LoginContainer);
