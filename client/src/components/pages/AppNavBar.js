import React, { useState } from 'react';
import { Navbar, NavbarBrand, Container, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';
import GuestNavbar from './GuestNavbar';
import AuthNavbar from './AuthNavbar';
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import './AppNavBar.css'

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const user=useSelector((state)=>state.auth.user)
  console.log(user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  return (
    <Navbar  expand="sm" className="main-navbar">
      <Container>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            {user ? <AuthNavbar /> : <GuestNavbar />}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
