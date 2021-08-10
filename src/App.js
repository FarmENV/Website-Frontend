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
import Envprofile from './pages/Envprofile/ProfilEnv'
import Envconfig from './pages/EnvConfig/Envconfig'
import Profsettings from './pages/ProfSettings/Profsettings'
import Contactus from './pages/Contactus/contact'

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
          <Route exact path='/envpro' component={Envprofile}></Route>     
          <Route exact path='/envconfig' component={Envconfig}></Route>     
          <Route exact path='/profsettings' component={Profsettings}></Route>
          <Route exact path='/contact' component={Contactus}></Route> 
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
