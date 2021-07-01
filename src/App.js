import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import Layout from './pages/layout/Layout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
