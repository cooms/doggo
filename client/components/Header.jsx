import React from 'react'

export default React.createClass({
  render() {
    return (
      <header className="header">

        <img className="headerLogo" src='/images/doggo_logo.png' />
        <p> Doggo </p>
        <ul className="headerMenu">
          <li> First </li>
          <li> Second </li>
          <li> Third </li>
          <li> Fourth </li>
        </ul>
        <svg id="right-corner">
          <polygon points="50,0 300,0 250,60 0,60" style={{fill:'#ff2600'}}/>
        </svg>
      </header>
    )
  }
})
