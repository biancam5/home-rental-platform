import React from 'react';
import {SideBarData} from './SideBarData'

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>{SideBarData.map((val,key)=>{
      return (
        <div>
        <SidebarLink to={val.link} key={key}>{val.title}</SidebarLink>
        </div>)
     })}
       </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Rent Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
