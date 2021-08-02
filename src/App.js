import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import Layout from './pages/layout/Layout'
import freQuestions from './pages/FrequentQuestions/freQuestions'
import './App.css'
import Login from './pages/login/Login'
import UserProfile from './pages/UserProfile/UserProfile'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/faq' component={freQuestions}></Route>
          <Route exact path='/userpro' component={UserProfile}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
