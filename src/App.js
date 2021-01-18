import './App.css';

import React from 'react'
import {Home} from './Components/Home'
import {CompanyPanel} from './Components/CompanyPanel'
import {CompanyList} from './Components/CompanyList'
import {StaffPanel} from './Components/StaffPanel'
import {Login} from './Components/Login'
import {Navigation} from './Components/Navigation'
import {BrowserRouter, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <h3 className="m-3 d-flex justify-content-center">Car Renting System</h3>

    <Navigation/>
    
    <Switch>

    <Route path='/' component = {Home} exact/>
    <Route path='/companypanel' component = {CompanyPanel} exact />
    <Route path='/companylist' component = {CompanyList} exact/>
    <Route path='/staffpanel' component = {StaffPanel} exact/>
    <Route path='/login' component = {Login} exact/>

    </Switch>

    </BrowserRouter>
  )
}

export default App;
