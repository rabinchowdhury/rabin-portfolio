import React, { Component } from "react";

// Simple React Bootstrap 4 components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div className="container">
        <Navbar light expand="md">
          <NavbarBrand href="/">RABIN.DEV</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/"></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/work-page">Work</NavLink>
              </NavItem> 
              <NavItem>
                <NavLink href="/about-page">About</NavLink>
              </NavItem>          
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;