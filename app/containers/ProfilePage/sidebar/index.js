import React from 'react';
// Sidebar
import Avatar from 'components/ProfileUser/Avatar';
import NameUser from 'components/ProfileUser/NameUser';
import SidebarBox from 'components/ProfileUser/sidebar/SidebarBox';
import SidebarList from 'components/ProfileUser/sidebar/SidebarList';
import SidebarItem from 'components/ProfileUser/sidebar/SidebarItem';
import SidebarLink from 'components/ProfileUser/sidebar/SidebarLink';
import PropTypes from 'prop-types';
import theme from 'components/Theme/index';
import list from './constants';
function SidebarWrapper({ user }) {
  return (
    <SidebarBox theme={theme}>
      <Avatar
        src={user.avatar && `http://18.139.163.192${user.avatar}`}
        alt="avatar"
      />
      <NameUser> {user.name}</NameUser>
      <SidebarList theme={theme}>
        {list.map(item => (
          <SidebarItem key={item.id}>
            <SidebarLink to={item.to}>{item.value}</SidebarLink>
          </SidebarItem>
        ))}
      </SidebarList>
    </SidebarBox>
  );
}
SidebarWrapper.propTypes = {
  user: PropTypes.object,
};
export default SidebarWrapper;
