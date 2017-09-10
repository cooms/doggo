import React from 'react'
import {Link} from 'react-router-dom'

export default React.createClass({
  render() {
    return (
      <header className="header">
        <Link to="/" className="headerHomeLink"><img className="headerLogo" src="/images/logo_concept_2.png"/></Link>
        <ul className="headerMenu">
          <li><a className="headerProfileLink" href=""><img className="profileIcon" src="/images/dog_face.png"/></a></li>
          <li><Link to="/" className="headerLink animatedUnderline"> home </Link> </li>
          <li><Link to="/about" className="headerLink animatedUnderline"> about </Link> </li>
          <li><Link to="/contact" className="headerLink animatedUnderline"> contact </Link> </li>
        </ul>
      </header>
    )
  }
})
