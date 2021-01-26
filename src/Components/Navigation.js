import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import {PopUpRezInfo} from "./PopUpRezInfo";


let dataOfManager = sessionStorage.getItem('Manager')
let Manager = JSON.parse(dataOfManager)

let dataOfStaff = sessionStorage.getItem('Staff')
let Staff = JSON.parse(dataOfStaff)

export class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
          ShowReservationInfoPopUp: false,
        };
    }

    ShowReservation = () =>
    {
        this.setState({
            ShowReservationInfoPopUp : true
        })
    }

    HideReservation = () =>
    {
        this.setState({
            ShowReservationInfoPopUp : false
        })
    }



    Rst= () => {
        sessionStorage.setItem('Manager', null)
        sessionStorage.setItem('Staff', null)

        alert("Session End.")
    }

  render() {
   if(Manager || Staff){
       return (
           <div>
               <Navbar bg="dark" expand = "lg"  fixed="top">
                   <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                   <Navbar.Collapse id = "basic-navbar-nav">

                       <Nav>
                           <NavLink className = "d-inline p-2 bg-dark text-white" to="/">HomePage</NavLink>
                           <NavLink className = "d-inline p-2 bg-dark text-white" to="/companylist">Company List</NavLink>
                           <Button onClick={this.ShowReservation} variant="secondary" style={{marginLeft:'1rem'}}>Check Your Reservation</Button>

                           <NavLink className = "d-inline p-2 bg-dark text-white" to="/companypanel" >Company Panel</NavLink>
                           <a href="/"><Button onClick={this.Rst} variant="danger">Log out</Button></a>
                       </Nav>

                   </Navbar.Collapse>
               </Navbar>
               {this.state.ShowReservationInfoPopUp ? (
                   <PopUpRezInfo  onClose={this.HideReservation}  />
               ) : null}
           </div>
       );
   }
   else{
       return (
           <div>
               <Navbar bg="dark" expand = "lg"  fixed="top">
                   <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                   <Navbar.Collapse id = "basic-navbar-nav">

                       <Nav>
                           <NavLink className = "d-inline p-2 bg-dark text-white" to="/">HomePage</NavLink>
                           <NavLink className = "d-inline p-2 bg-dark text-white" to="/companylist">Company List</NavLink>
                           <Button onClick={this.ShowReservation} variant="secondary" style={{marginLeft:'1rem'}}>Check Your Reservation</Button>
                           <Nav className = "d-inline p-2 bg-dark text-white " style={{marginTop:'-0.4rem'}}> <Dropdown as={ButtonGroup}>

                               <Button variant="secondary" style={{marginLeft:'1rem'}}>Login</Button>

                               <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

                               <Dropdown.Menu>
                                   <Dropdown.Item href="/stafflogin">Staff</Dropdown.Item>
                                   <Dropdown.Item href="/managerlogin">Manager</Dropdown.Item>
                               </Dropdown.Menu>
                           </Dropdown>
                           </Nav>

                       </Nav>

                   </Navbar.Collapse>
               </Navbar>

               {this.state.ShowReservationInfoPopUp ? (
                   <PopUpRezInfo  onClose={this.HideReservation}  />
               ) : null}
           </div>
       );
   }
  }
}
