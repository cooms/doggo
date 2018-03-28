import React from 'react'

import Header from './Header'
import Slider from './Slider'
import AboutSection from './AboutSection'
import PlaydateSection from './PlaydateSection'
import SignupSection from './SignupSection'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <Slider/>
        <AboutSection/>
        <PlaydateSection/>
        <SignupSection/>
        <Footer/>
      </div>
    )
  }
})
