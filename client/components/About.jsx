import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div className="mainWrapper">
        <Header/>
        <section className="aboutWrapper">
          <h1> What is Doggo all about? </h1>
          <div className="aboutWrapperContent">
            <p> filler filler filler filler filler</p>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
})
