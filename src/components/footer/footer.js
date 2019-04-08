import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
        <span style={{color: "#9E9E9E", fontSize: "15px", fontWeight: "bold"}}>Let's get connected!</span>
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item, index)=>{
                return(
                  <li key ={index}>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <ul className="copyright" style={{fontSize: "15px"}}>
            <li>© Copyright Sandesh Bhandari</li>
            
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}
