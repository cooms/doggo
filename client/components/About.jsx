import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <Footer/>
      </div>
    )
  }
})
