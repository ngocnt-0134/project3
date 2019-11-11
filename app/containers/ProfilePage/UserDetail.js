import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ProfileBlock from 'components/ProfileUser/ProfileBlock';
import TitleBlock from 'components/ProfileUser/TitleBlock';

import Button from 'components/ProfileUser/Button';

import ProfileContent from 'components/ProfileUser/profileContent';
import Content from 'components/ProfileUser/profileContent/Content';
import TitleProfileContent from 'components/ProfileUser/profileContent/TitleProfileContent';
import ProfileItem from 'components/ProfileUser/profileContent/item';
import ItemTitleName from 'components/ProfileUser/profileContent/item/TitleName';
import ItemDesciption from 'components/ProfileUser/profileContent/item/Description';

import theme from 'components/Theme/index';
function UserDetail({ user }) {
  console.log(user);
  const arrtitle = Object.keys(user);
  const arrDes = Object.values(user);
  const array = arrtitle.map((s, i) => ({ title: s, description: arrDes[i] }));
  return (
    <React.Fragment>
      <Helmet>
        <title>User Detail</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <ProfileBlock theme={theme}>
        <TitleBlock theme={theme}>
          <TitleProfileContent>Account detail</TitleProfileContent>
          <Button to="/user/update" theme={theme}>
            <i className="fas fa-edit" />
          </Button>
        </TitleBlock>
        <ProfileContent>
          <Content>
            {array.map(item => (
              <ProfileItem key={item.title}>
                <ItemTitleName theme={theme}>{item.title}</ItemTitleName>
                <ItemDesciption theme={theme}>
                  {item.description ? item.description : 'N/a'}
                </ItemDesciption>
              </ProfileItem>
            ))}
          </Content>
        </ProfileContent>
      </ProfileBlock>
    </React.Fragment>
  );
}
UserDetail.propTypes = {
  user: PropTypes.object,
};

export default UserDetail;
