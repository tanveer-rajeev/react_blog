import React, { Component } from "react";
import { Nav, NavItem, NavbarBrand, Navbar, NavLink } from "reactstrap";

class AppNev extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar color="dark" green expand="md">
          <NavbarBrand href="/">Micro Blogging Application</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/posts">Posts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/createAccount">CreateAccount</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/submitPost">SubmitPost</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">Users</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNev;
