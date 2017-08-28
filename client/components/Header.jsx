import React from 'react'
import {Link} from 'react-router'

import About from './About'

export default React.createClass({
  render() {
    return (
      <header className="header">
        <img className="headerLogo" src="/images/logo_concept_2.png"/>
        <ul className="headerMenu">
          <li><a className="headerProfileLink" href=""><img className="profileIcon" src="/images/dog_face.png"/></a></li>
          <li><a className="headerLink animatedUnderline" href=""> First </a> </li>
          <li><Link to="/About"> About </Link> </li>
          <li><a className="headerLink animatedUnderline" href=""> Third </a> </li>
          <li><a className="headerLink animatedUnderline" href=""> Fourth </a> </li>
        </ul>
      </header>
    )
  }
})
