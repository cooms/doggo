import React from 'react'

export default React.createClass({
  render(){
    return(
      <section className="aboutSectionWrapper">
        <div className="sectiontextWrapper">
        </div>
        <div className="aboutSectionExampleWrapper">
          <h1> Meet doggos: </h1>
          <div className="profileExample">
            <img src="/images/bella.jpg" className="profilePicExample"/>
            <article className="infoRow">
              <h2><strong> Bella </strong></h2>
              <span className="initialInfoExmaple">
                <h4> Female </h4>
                <h4> Black Lab </h4>
                <h4> 2 years </h4>
              </span>
              <hr/>
              <p> Bella is absolutely crazy; she barks at random objects and MUST interact with everyone and everything.<br/>Everyone knows Bella, they love her to bits and she knows it too.</p>
            </article>
          </div>
          <div className="profileExample profileDarker">
            <img src="/images/lily.jpg" className="profilePicExample"/>
            <article className="infoRow">
              <h2><strong> Lily </strong></h2>
              <span className="initialInfoExmaple">
                <h4> Female </h4>
                <h4> Choc Lab </h4>
                <h4> 8 years </h4>
              </span>
              <hr/>
              <p> Lily is a friendly older lab who is very protective of her owner. She's not too fond of little fluffy dogs, but gets along great with other labs reagrdless of age. </p>
            </article>
          </div>
          <div className="profileExample">
            <img src="/images/neo.jpg" className="profilePicExample"/>
            <article className="infoRow">
              <h2><strong> Neo </strong></h2>
              <span className="initialInfoExmaple">
                <h4> Male </h4>
                <h4> Cavoodle </h4>
                <h4> 1 year </h4>
              </span>
              <hr/>
              <p> Neo had a few issues feeding when he was a puppy; he used to be the runt of the litter, but is now much bigger than anyone would've thought. He loves hanging out with his twin sister. </p>
            </article>
          </div>
        </div>
      </section>
    )
  }
})
