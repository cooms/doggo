import React from 'react'

export default React.createClass({
  render(){
    return (
      <section className="playdateSection">
        <h1> Organize Playdates! </h1>
        <div className="playdateExample">
          <p> Doggo acts as a platform for your dog to find other dogs and organize playdates! Is your dog looking for that certain other dog to hang out and socialize with? <br/> It's likely you can find them on Doggo!
          </p>
          <div className="playdateImageWrapper">
            <img src="/images/bella.jpg" className="playdateImage left"/>
            <img src="/images/arrow.fw.png" className="arrowImg reversedVert bottom"/>
            <img src="/images/arrow.fw.png" className="arrowImg"/>
            <img src="/images/lily.jpg" className="playdateImage right"/>
          </div>
        </div>
        <a href="signUp" className="buttonMain3"> Organzie a playdate now! </a>
      </section>
    )
  }
})
