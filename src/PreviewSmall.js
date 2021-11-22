import React from 'react'
function PreviewSmall(props){
  const {generalInfo, education, work} = props;
  return(   
    <div className="cv-form">
      <div className="white-part">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" id="photo-preview"/>
        <div class="general-info-preview">
          <p className="name-preview">{generalInfo.firstName !== '' ? generalInfo.firstName : "Name"}</p>
          <p className="name-preview">{generalInfo.secondName !== '' ? generalInfo.secondName : "Surname"}</p>
          <br/>
          <p>Phone number:</p>
          <p>{generalInfo.phoneNumber !== '' ? generalInfo.phoneNumber : "-"}</p>
          <br/>
          <p>Email:</p>
          <p>{generalInfo.email !== '' ? generalInfo.email : "-"}</p>
          <br/>
          <p>Date of Birth:</p>
          <p>{generalInfo.birthDate !== '' ? dateFormat(generalInfo.birthDate) : "DD/MM/YYYY"}</p>
        </div>
        <div>
          <h1>Education</h1>
          <ul>
            {education.map((edu) => {
              return <li key={edu.id}>{dateFormat(edu.studyBegin).substring(3)+" - "+dateFormat(edu.studyEnd).substring(3) + " : " + edu.schoolName + "-" + edu.titleOfStudy}</li>
            })}
          </ul>
        </div>
        <div>
          <h1>Practical Experience</h1>
          <ul>
            {work.map((w) => {
              return <li key={w.id}>{dateFormat(w.workBegin).substring(3)+" - "+dateFormat(w.workEnd).substring(3) + " : " + w.companyName + "-" + w.positionTitle}<p>Tasks: {w.mainTasks}</p></li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
function dateFormat(date){
  return date.substring(date.length-2) +"."+ date.substring(date.length-5, date.length-3) +"."+ date.substring(0, 4)
}
export default PreviewSmall