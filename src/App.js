import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import Layout from './pages/layout/Layout'
import freQuestions from './pages/FrequentQuestions/freQuestions'
import './App.css'
import Login from './pages/login/Login'
import UserProfile from './pages/UserProfile/UserProfile'
import Signup from './pages/signup/signup'
import NewEnv from './pages/NewEnv/newEnv'
import KitsSensor from './pages/SensorKits/SensorKits'
import Contactus from './pages/Contactus/contact'
import Help from './pages/Help/Help'
import Verification from './pages/Verify/verify'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/faq' component={freQuestions}></Route>
          <Route exact path='/userpro' component={UserProfile}></Route>
          <Route exact path='/newenv' component={NewEnv}></Route>
          <Route exact path='/sensorKits' component={KitsSensor}></Route>
          <Route exact path='/contact' component={Contactus}></Route>
          <Route exact path='/help' component={Help}></Route>
          <Route exact path='/verification' component={Verification}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
