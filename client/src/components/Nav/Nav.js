import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, NavLink, Container, Button } from 'reactstrap';
import './Nav.css';

const Nav = () =>
  <Navbar className="title">
    <Container className="container-fluid">
      <NavbarBrand className="navbar-header">New York Times Scraper</NavbarBrand>
      <NavItem>
        <NavLink className="link" href="/">Search</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="link" href="/saved">Saved</NavLink>
      </NavItem>
    </Container>
  </Navbar>;

export default Nav;