import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Router, Route, Switch} from 'react-router-dom'

import App from './components/App'

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
