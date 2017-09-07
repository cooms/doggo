import React from 'react'
import ReactDOM from 'react-dom'
import {hashHistory} from 'react-router'
import {HashRouter, Router, Route} from 'react-router-dom'

import App from './components/App'
import About from './components/About'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <HashRouter>
          <App/>
      </HashRouter>
    ),
    document.getElementById('app')
  )
})
