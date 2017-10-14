import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render(){
    return (
      <div className="mainWrapper">
        <Header/>
        <section className="signUpWrapper">
          <h2> Sign up Here! </h2>
          <hr/>
          <form className="signUpForm">
            <label> Your First Name </label>
            <br/>
            <input className="formInput"/>
            <br/><br/>
            <label> Your Last Name </label>
            <br/>
            <input className="formInput"/>
            <br/><br/>
            <label> Your Email </label>
            <br/>
            <input className="formInput" type="email"/>
            <br/><br/>
            <label> Your Dogs Name </label>
            <br/>
            <input className="formInput"/>
            <br/><br/>
            <label> Password </label>
            <br/>
            <input className="formInput" type="password"/>
            <br/><br/>
            <label> Confirm Password </label>
            <br/>
            <input className="formInput" type="password"/>
            <br/><br/>
            <input className="formSubmit" type="submit"/>
          </form>
        </section>
        <Footer/>
      </div>
    )
  }
})
