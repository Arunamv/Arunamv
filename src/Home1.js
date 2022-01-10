import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 
import Home from './pages/Home'
import Report from './pages/Report'
import Devices from './pages/Devices'
import Entity from './pages/Entity'
import Dashboard from './pages/dashboard/Dashboard'

import Users from './pages/Users'
import './App.css'
import useStyles from './components/MyStyle'
import CreateDevices from './pages/CreateDevices'
import CreateEntityForm from './pages/CreateEntityForm'
import UsersForm from './pages/UsersForm'


//import List from './List'
import MyDrawer from './components/MyDrawer'
import MyAppbar from './components/MyAppbar'


function Home1(){
    const classes=useStyles();
    return(
        <div  className='App'>
            <Router>
             <MyDrawer />

             <MyAppbar />
             <div className={classes.toolbar}></div>
                <Switch>
                <Route  exact path='/'>
                    <Dashboard />  
                    </Route>
                    <Route  path='/entity'>
                    <Entity /> 
                    </Route>
                    <Route path='/reports'>
                    <Report />  
                    </Route>
                    
                    <Route path='/users'>
                    <Users />  
                    </Route>
                    <Route path='/devices'>
                    <Devices />  
                    </Route>
                    <Route path='/createdevices'>
                    <CreateDevices />  
                    </Route>
                    <Route path='/CreateEntityForm'>
                    <CreateEntityForm />  
                    </Route>
                    <Route path='/UsersForm'>
                    <UsersForm />  
                    </Route>
                    
                </Switch>
            </Router>
    </div>     
    )
}
export default Home1;