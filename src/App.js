import './App.css';

import React from 'react'
import {Home} from './Components/Home'
import {CompanyPanel} from './Components/ManagementComps/CompanyPanel'
import {ManageCompany} from './Components/ManagementComps/ManageCompany'
import {ManageVehicles} from './Components/ManagementComps/ManageVehicles'
import {ManageStaff} from './Components/ManagementComps/ManageStaff'
import {ManageRezervations} from './Components/ManagementComps/ManageRezervations'
import {CompanyList} from './Components/CompanyList'
import {StaffPanel} from './Components/ManagementComps/StaffPanel'
import {Navigation} from './Components/Navigation'
import {EditVehicle} from './Components/ManagementComps/EditVehicle'
import {RentCar} from './Components/RentCar'
import {VehiclesByCompany} from './Components/VehiclesByCompany'
import {Demo} from "./Components/Demo";
import {ManagerLogin} from "./Components/ManagerLogin";
import {StaffLogin} from "./Components/StaffLogin";

import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <h3 className="m-3 d-flex justify-content-center">Car Renting System</h3>

    <Navigation/>
    
    <Switch>

    <Route path='/' component = {Home} exact/>
    <Route path='/companypanel' component = {CompanyPanel} exact />
    <Route path='/managecompany' component = {ManageCompany} exact />
    <Route path='/managevehicle' component = {ManageVehicles} exact />
    <Route path='/managestaff' component = {ManageStaff} exact />
    <Route path='/companylist' component = {CompanyList} exact/>
    <Route path='/staffpanel' component = {StaffPanel} exact/>
    <Route path='/editvehicle' component = {EditVehicle} exact/>
    <Route path='/rentcar/:id' component = {RentCar} exact/>
    <Route path='/vehiclesbycompany/:id' component = {VehiclesByCompany} exact/>
    <Route path='/managerlogin' component = {ManagerLogin} exact/>
    <Route path='/StaffLogin' component = {StaffLogin} exact/>
    <Route path='/managerezervations' component = {ManageRezervations} exact/>


    </Switch>

    </BrowserRouter>
    
  )
}

export default App;
