import React from 'react'
import {Link} from 'react-router-dom'

export default React.createClass({
  render() {
    return (
      <header className="header">
        <Link to="/" className="headerHomeLink"><img className="headerLogo" src="/images/logo_concept_2.png"/></Link>
        <ul className="headerMenu">
          <li><a className="headerProfileLink" href=""><img className="profileIcon" src="/images/dog_face.png"/></a></li>
          <li><Link to="/" className="headerLink animatedUnderline"> Home </Link> </li>
          <li><Link to="/about" className="headerLink animatedUnderline"> About </Link> </li>
          <li><Link to="/conact" className="headerLink animatedUnderline"> Contact </Link> </li>
          <li><Link to="/something" className="headerLink animatedUnderline"> Something </Link> </li>
        </ul>
      </header>
    )
  }
})
