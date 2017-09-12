import React from 'react'

import Header from './Header'
import Slider from './Slider'
import AboutSection from './AboutSection'
import PlaydateSection from './PlaydateSection'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <Slider/>
        <AboutSection/>
        <PlaydateSection/>
        <Footer/>
      </div>
    )
  }
})
