import React from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/authactions';
import userimage from './user.png';
import './AppNavBar.css'
import logoimage from './favicon.png';

const AuthNavbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <>
     
      <NavItem>
        <Link to="/" className="navbar-brand">
        <img src={logoimage} alt="Logo" className="logo-image" />
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contact" className="LINK-navbar">
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
            <Link to="/Dashboard">
              <strong className="LINK-dropdown">our services</strong>
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <NavItem className="search-bar">
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </NavItem>
      <UncontrolledDropdown nav inNavbar className="profile-dropdown">
        <DropdownToggle nav caret>
        <img src={userimage} alt="Logo" className="profile-image" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <Link to="/Profile">
              <span >
                <strong className="LINK-dropdown">{user && `logged as ${user.name} `}</strong>
              </span>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <NavItem>
              <NavLink href="#" onClick={handleLogout}>
                <strong className="LINK-dropdown"> Logout</strong>
              </NavLink>
            </NavItem>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default AuthNavbar;

