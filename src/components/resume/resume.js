import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item, index)=>{
                  return(
                    <div className="row item" key ={index}>
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">Major: {item.Major}<br />
                          Minor: {item.Minor} <br/>
                          <em className="date">Graduating: {item.Graduating}</em><br /> <br />
                          Achievements: {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item,index) => {
                  return(
                    <div className="row item" key = {index}>
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.Position}<br/>
                          <em className="date">{item.LeavingDate}</em><br/>
                          <span>
                            {item.description.map((single, index) =>(
                              <p key ={index}>{single}</p>
                            ))}

                          </span>
                          
                          </p>
                          
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item, index) => {
                    return(
                      <li key ={index}>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}
