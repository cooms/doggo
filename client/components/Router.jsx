import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Router, Route, hashHistory} from 'react-router-dom'

import App from './components/App'
import About from './components/About'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App}/>
        <Route path='./About' component={About}/>
      </Router>
    ),
    document.getElementById('app')
  )
})
