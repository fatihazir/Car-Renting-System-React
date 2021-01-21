import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand = "lg">
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">

                <Nav>
                    <NavLink className = "d-inline p-2 bg-dark text-white" to="/">HomePage</NavLink>
                    <NavLink className = "d-inline p-2 bg-dark text-white" to="/companylist">Company List</NavLink>
                    <NavLink className = "d-inline p-2 bg-dark text-white" to="/login">Login</NavLink>
                    <NavLink className = "d-inline p-2 bg-dark text-white" to="/editvehicle">Edit Vehicle</NavLink>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
