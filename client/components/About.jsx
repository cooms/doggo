import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <h1> About Page </h1>
        <Footer/>
      </div>
    )
  }
})
