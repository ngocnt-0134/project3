/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, memo } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import ProfileBlock from 'components/ProfileUser/ProfileBlock';
import TitleBlock from 'components/ProfileUser/TitleBlock';
import Button from 'components/ProfileUser/Button';
import ProfileContent from 'components/ProfileUser/profileContent';
import ProfileContentLeft from 'components/ProfileUser/profileContent/left';
import ProfileContentRight from 'components/ProfileUser/profileContent/right';
import TitleProfileContent from 'components/ProfileUser/profileContent/TitleProfileContent';
// File
import FormFile from 'components/Form/FormFile';
import Avatar from 'components/ProfileUser/editUser/Avatar';
import LabelAvatar from 'components/ProfileUser/editUser/LabelAvatar';
import InputFile from 'components/Input/InputFile';
import FormGroup from 'components/ProfileUser/editUser/FormGroup';
import NonSpan from 'components/ProfileUser/editUser/NonSpan';
import ButtonSave from 'components/ProfileUser/editUser/Button';
// FormBox
import FormBox from 'components/ProfileUser/editUser/FormBox';
// Theme
import theme from 'components/Theme/index';
import FormEditContent from 'containers/ProfilePage/formEdit/content';
import { makeSelectEditProfileUser } from './selector';
import { updateUser } from './actions/index';
import reducer from './reducer';
import saga from './saga';
// const formData = {};
function EditProfilePage({ user, onEditProfileUser, userNew }) {
  const key = 'userNew';
  const arrtitle = Object.keys(user);
  const arrDes = Object.values(user);
  const array = arrtitle.map((s, i) => ({ title: s, description: arrDes[i] }));
  const [data, setData] = useState(user);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  async function handleChangeInput(event) {
    const value =
      event.target.type === 'file' ? event.target.files[0] : event.target.value;
    const { name } = event.target;
    setData(() => ({ ...data, [name]: value }));
    const form = new FormData();
    form.append('avatar', value);
    form.append('name', data.name);
    form.append('email', data.email);
    form.append('phone_number', data.phone_number);
    form.append('address', data.address);
    form.append('visa_number', data.visa_number);
    await onEditProfileUser(form);
  }

  const formik = useFormik({
    initialValues: data,
    onSubmit: async values => {
      console.log('click Chua');
      const formDataSubmit = new FormData();
      formDataSubmit.append('avatar', data.avatar);
      formDataSubmit.append('name', values.name);
      formDataSubmit.append('email', values.email);
      formDataSubmit.append('phone_number', values.phone_number);
      formDataSubmit.append('address', values.address);
      formDataSubmit.append('visa_number', values.visa_number);
      formDataSubmit.append('string', 'delete');

      await onEditProfileUser(formDataSubmit);
    },
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>User Edit</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <ProfileBlock
        theme={theme}
        enctype="multipart/form-data"
        onSubmit={formik.handleSubmit}
      >
        <TitleBlock theme={theme}>
          <TitleProfileContent>Edit profile</TitleProfileContent>
          <Button
            to="/user"
            color={theme['color-white']}
            bg={theme['color-btn-close']}
          >
            <i className="fas fa-window-close" />
          </Button>
        </TitleBlock>
        <ProfileContent>
          <ProfileContentLeft>
            <FormFile>
              <Avatar
                src={data.avatar && `http://18.139.163.192${data.avatar}`}
                alt="avatar"
              />
              <InputFile
                type="file"
                id="avatar"
                name="avatar"
                onChange={e => handleChangeInput(e)}
              />
              <LabelAvatar htmlFor="avatar" theme={theme}>
                <i className="fas fa-camera" />
              </LabelAvatar>
            </FormFile>
          </ProfileContentLeft>
          <ProfileContentRight>
            <FormBox>
              {array.map(item => (
                <FormEditContent
                  key={item.title}
                  type="text"
                  label={item.title}
                  id={item.title}
                  name={item.title}
                  value={item.description}
                  placeholder={item.title}
                  disabled={
                    item.title === 'id' ||
                    item.title === 'created_at' ||
                    item.title === 'avatar' ||
                    item.title === 'updated_at'
                  }
                  onChangeHandleInput={formik.handleChange}
                />
              ))}
              <FormGroup />
              <FormGroup>
                <NonSpan>&nbsp;</NonSpan>
                <ButtonSave type="submit" theme={theme}>
                  <i className="fas fa-save" />
                </ButtonSave>
              </FormGroup>
            </FormBox>
          </ProfileContentRight>
        </ProfileContent>
      </ProfileBlock>
    </React.Fragment>
  );
}

EditProfilePage.propTypes = {
  user: PropTypes.object,
  onEditProfileUser: PropTypes.func,
  userNew: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userNew: makeSelectEditProfileUser(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onEditProfileUser: value => dispatch(updateUser(value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EditProfilePage);
