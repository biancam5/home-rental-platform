import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Uchi - unique experiences </NavLink>
        <NavIcon onClick={toggle}>
          <p>Rent</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );  
};

export default Navbar;
