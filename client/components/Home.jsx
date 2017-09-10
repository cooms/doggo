import React from 'react'

import Header from './Header'
import AboutSection from './AboutSection'
import Slider from './Slider'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <Slider/>
        <AboutSection/>
        <Footer/>
      </div>
    )
  }
})
