import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import './AppNavBar.css';
import userimage from './user.png';
import logoimage from './favicon.png';

const GuestNavbar = () => {
  return (
    <>
      
      <NavItem>
        <Link to="/" className="navbar-brand">
        <img src={logoimage} alt="Logo" className="logo-image" />
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contact"  className="LINK-navbar">
          <strong > Contact</strong>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/support" className="LINK-navbar">
          <strong > Support</strong>
        </Link>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret className="LINK-navbar">
          Fields
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <strong className="LINK-dropdown">Link 1</strong>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem className="search-bar">
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className=" search-button">Search</button>
        </div>
      </NavItem>
      <UncontrolledDropdown nav inNavbar className="profile-dropdown">
      <DropdownToggle nav caret>
      <img src={userimage} alt="Logo" className="profile-image" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <RegisterModal />
          </DropdownItem>
          <DropdownItem>
            <LoginModal />
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default GuestNavbar;
