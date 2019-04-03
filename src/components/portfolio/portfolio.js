import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{fontSize: "20px"}}>PROJECTS</h1>
          <hr id ="project-divider"/>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
              return(
                <div className="columns portfolio-item" style={{margin: "2%"}} key={index} >
                <a href={item.link} className="popup-modal">
                  <div className="item-wrap">
                    
                      <img src={item.imgurl} className="item-img" style={{height: "200px"}}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    
                  </div>
                  </a>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
