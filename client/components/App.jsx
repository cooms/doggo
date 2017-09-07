import React from 'react'

import Header from './Header'
import Slider from './Slider'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <Slider/>
        <Footer/>
      </div>
    )
  }
})
