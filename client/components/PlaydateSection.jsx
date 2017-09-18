import React from 'react'
import $ from 'jquery'

export default React.createClass({
  componentDidMount() {
    $(".playdateImage").css({
      "transform": "rotate(180deg)",
      "opacity": "0"
    })
    $(".left").animate({
      "opacity": "1"
    }, 2000).css({"animation-name": "bounce3", "animation-duration": "2s"})
    $(".right").animate({
      "opacity": "1"
    }, 2000)
  },

  render() {
    return (
      <section className="playdateSection">
        <h1> Organize Playdates! </h1>
        <div className="playdateExample">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className="playdateImageWrapper">
            <img src="/images/bella.jpg" className="playdateImage left"/>
            <img src="/images/arrow.fw.png" className="arrowImg reversedVert bottom"/>
            <img src="/images/arrow.fw.png" className="arrowImg"/>
            <img src="/images/lily.jpg" className="playdateImage right"/>
          </div>
        </div>
      </section>
    )
  }
})
