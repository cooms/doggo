import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Switch} from 'react-router-dom'

import App from './App'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import SignUp from './SignUp'

export default React.createClass({
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </main>
    )
  }
})
