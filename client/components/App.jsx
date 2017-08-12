import React from 'react'
import {Link} from 'react-router'

import Header from './Header'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <h1>React development has begun!</h1>
      </div>
    )
  }
})
