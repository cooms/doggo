import React from 'react'

export default React.createClass({
  render() {
    return (
      <section className="sliderWrapper">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <article className="sliderTextWrapper slide1">
                <h2> HELLO FREN </h2>
                <hr/>
                <p> Hey there and welcome my dude, this is doggo for your doggo.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <br/>
                <a href="signUp" className="buttonMain1"> Sign up here! </a>
              </article>
              <img src="/images/slider_image_1.jpg" alt="Labrador HD Picture"/>
            </div>
            <div className="item">
              <article className="sliderTextWrapper slide2">
                <h2> HELLO FREN </h2>
                <hr/>
                <p> Hey there and welcome my dude, this is doggo for your doggo.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </article>
              <img src="/images/slider_image_2.jpg" alt="Fluffo HD Picture"/>
            </div>
            <div className="item">
              <article className="sliderTextWrapperTop">
              <h2> How do I sign up? </h2>
              <p> Signing up is super easy, you'll have your dog's own profile up and running in no time! </p>
              <br/>
              <a href="signUp" className="buttonMain1"> Sign up here! </a>
              </article>
            <img src="/images/slider_image_3.jpg" alt="Dalmation Puppies HD"/>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    )
  }
})
