import React, { Component } from 'react'
import PreviewBig from './PreviewBig'
import PreviewSmall from '../PreviewSmall'
import uniqid from 'uniqid'

class Form extends Component{
    constructor(){
        super()
        this.state ={
            generalInfo: { 
                firstName: '',
                secondName: '',
                phoneNumber: '',
                email: '',
                birthDate: ''
            },
            educationInfo: {
                schoolName: '',
                titleOfStudy: '',
                studyBegin: '',
                studyEnd: '',
                id: uniqid()
            },
            education: [],
            workInfo: {
                companyName: '',
                positionTitle: '',
                mainTasks: '',
                workBegin: '',
                workEnd: '',
                id: uniqid()
            },
            work: [],
            matches: window.matchMedia("(max-width: 600px)").matches
        }
    }
    handlePhotoChange = (e) => {
        if(e.target.files.length > 0){
            var fileReader = new FileReader()
            fileReader.onload = function (event) {
                document.getElementById("photo-preview").setAttribute("src", event.target.result)
                document.getElementById("photo-input").style.backgroundImage = `url(${event.target.result})`
            }
            fileReader.readAsDataURL(e.target.files[0])            
        }
    }
    handleFirstNameChange = (e) => {
        this.setState(prevState => ({
            generalInfo: {
                ...prevState.generalInfo,
                firstName: e.target.value
            }
        }))
    }
    handleSecondNameChange = (e) => {
        this.setState(prevState => ({
            generalInfo: {
                ...prevState.generalInfo,
                secondName: e.target.value
            }
        }))
    }
    handlePhoneNumberChange = (e) => {
        this.setState(prevState => ({
            generalInfo: {
                ...prevState.generalInfo,
                phoneNumber: e.target.value
            }
        }))
    }
    handleEmailChange = (e) => {
        this.setState(prevState => ({
            generalInfo: {
                ...prevState.generalInfo,
                email: e.target.value
            }
        }))
    }
    handleBirthDateChange = (e) => {
        this.setState(prevState => ({
            generalInfo: {
                ...prevState.generalInfo,
                birthDate: e.target.value
            }
        }))
    }
    handleSchoolNameChange = (e) => {
        this.setState(prevState => ({
            educationInfo: {
                ...prevState.educationInfo,
                schoolName: e.target.value
            }
        }))
    }
    handleStudyTitleChange = (e) => {
        this.setState(prevState => ({
            educationInfo: {
                ...prevState.educationInfo,
                titleOfStudy: e.target.value
            }
        }))
    }
    handleStudyBeginChange = (e) => {
        this.setState(prevState => ({
            educationInfo: {
                ...prevState.educationInfo,
                studyBegin: e.target.value
            }
        }))
    }
    handleStudyEndChange = (e) => {
        this.setState(prevState => ({
            educationInfo: {
                ...prevState.educationInfo,
                studyEnd: e.target.value
            }
        }))
    }
    handleCompanyNameChange = (e) => {
        this.setState(prevState => ({
            workInfo: {
                ...prevState.workInfo,
                companyName: e.target.value
            }
        }))
    }
    handlePositionTitleChange = (e) => {
        this.setState(prevState => ({
            workInfo: {
                ...prevState.workInfo,
                positionTitle: e.target.value
            }
        }))
    }
    handleMainTasksChange = (e) => {
        this.setState(prevState => ({
            workInfo: {
                ...prevState.workInfo,
                mainTasks: e.target.value
            }
        }))
    }
    handleWorkBeginChange = (e) => {
        this.setState(prevState => ({
            workInfo: {
                ...prevState.workInfo,
                workBegin: e.target.value
            }
        }))
    }
    handleWorkEndChange = (e) => {
        this.setState(prevState => ({
            workInfo: {
                ...prevState.workInfo,
                workEnd: e.target.value
            }
        }))
    }
    addEducation = (e) => {
        e.preventDefault()
        this.setState({
            education: this.state.education.concat(this.state.educationInfo),
            educationInfo: {
                schoolName: '',
                titleOfStudy: '',
                studyBegin: '',
                studyEnd: '',
                id: uniqid()
            }
        })
    }
    addWork = (e) => {
        e.preventDefault()
        this.setState({
            work: this.state.work.concat(this.state.workInfo),
            workInfo: {
                companyName: '',
                positionTitle: '',
                mainTasks: '',
                workBegin: '',
                workEnd: '',
                id: uniqid()
            }
        })
    }
    deleteEducation = (e) => {
            var filteredEducation = this.state.education.filter(edu => edu.id !== e.target.dataset.id)
            this.setState({
                education: filteredEducation
            })
    }
    deleteWork = (e) => {
            var filteredWork = this.state.work.filter(w => w.id !== e.target.dataset.id)
            this.setState({
                work: filteredWork
            })
    }
    applyForm = (e) => {
        e.preventDefault()
    }
    render(){
        const {generalInfo, educationInfo, education, workInfo, work} = this.state
        return(
            <div>
                <form id="form" className="active" onSubmit={this.applyForm}>
                    <div className="general-info-top-part">
                        <label htmlFor="photo" id="photo-input"></label>
                        <br />
                        <input
                            onChange={this.handlePhotoChange}
                            value={generalInfo.photo}
                            type="file"
                            accept="image/*"
                            id="photo"
                            required
                        />
                        <div className="names">
                            <label htmlFor="firstName">First Name</label>
                            <br />
                            <input
                                onChange={this.handleFirstNameChange}
                                value={generalInfo.firstName}
                                type="text"
                                id="firstName"
                                className="input-field name-part"
                                required
                            />
                            <label htmlFor="secondName">Second Name</label>
                            <br />
                            <input
                                onChange={this.handleSecondNameChange}
                                value={generalInfo.secondName}
                                type="text"
                                id="secondName"
                                className="input-field name-part"
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <br />
                    <input
                        onChange={this.handlePhoneNumberChange}
                        value={generalInfo.phoneNumber}
                        type="tel"
                        id="phoneNumber"
                        className="input-field"
                        required
                    />
                    <label htmlFor="email">E-Mail</label>
                    <br />
                    <input
                        onChange={this.handleEmailChange}
                        value={generalInfo.email}
                        type="email"
                        id="email"
                        className="input-field"
                        required
                    />
                    <label htmlFor="birthDate">Date of Birth</label>
                    <br />
                    <input
                        onChange={this.handleBirthDateChange}
                        value={generalInfo.birthDate}
                        type="date"
                        id="birthDate"
                        className="input-field"
                        required
                    />
                    <br />
                </form>
                <form id="education-form" className="active" onSubmit={this.addEducation}>
                    <h1>Education</h1>
                    <label htmlFor="education-place">Place of Education</label><br/>
                    <input 
                        onChange={this.handleSchoolNameChange}
                        value={educationInfo.schoolName}
                        type="text"
                        id="education-place"
                        className="input-field"
                        required
                    />
                    <label htmlFor="study-title">Title of Study</label><br/>
                    <input 
                        onChange={this.handleStudyTitleChange}
                        value={educationInfo.titleOfStudy}
                        type="text"
                        id="study-title"
                        className="input-field"
                        required
                    />
                    <label htmlFor="study-begin">Begin of Study</label><br />
                    <input
                        onChange={this.handleStudyBeginChange}
                        value={educationInfo.studyBegin}
                        type="date"
                        id="study-begin"
                        className="input-field"
                        required
                    />
                    <label htmlFor="study-end">End of Study</label><br />
                    <input
                        onChange={this.handleStudyEndChange}
                        value={educationInfo.studyEnd}
                        type="date"
                        id="study-end"
                        className="input-field"
                        required
                    />
                    <button type="submit" id="add-education">Add Education</button>
                    <ul>
                        {education.map((edu) => {
                        return <li key={edu.id}>{edu.schoolName + "-" + edu.titleOfStudy} <i className="far fa-trash-alt" data-id={edu.id} onClick={this.deleteEducation}></i></li>
                        })}
                    </ul>
                </form>
                <form id="work-form" className="active" onSubmit={this.addWork}>
                    <h1>Practical Experience</h1>
                    <label htmlFor="work-place">Place of Work</label><br/>
                    <input 
                        onChange={this.handleCompanyNameChange}
                        value={workInfo.companyName}
                        type="text"
                        id="work-place"
                        className="input-field"
                        required
                    />
                    <label htmlFor="position-title">Position Title</label><br/>
                    <input 
                        onChange={this.handlePositionTitleChange}
                        value={workInfo.positionTitle}
                        type="text"
                        id="position-title"
                        className="input-field"
                        required
                    />
                    <label htmlFor="tasks">Main Tasks</label><br/>
                    <input 
                        onChange={this.handleMainTasksChange}
                        value={workInfo.mainTasks}
                        type="text"
                        id="tasks"
                        className="input-field"
                        required
                    />
                    <label htmlFor="work-begin">Begin of Work</label><br />
                    <input
                        onChange={this.handleWorkBeginChange}
                        value={workInfo.workBegin}
                        type="date"
                        id="work-begin"
                        className="input-field"
                        required
                    />
                    <label htmlFor="work-end">End of Work</label><br />
                    <input
                        onChange={this.handleWorkEndChange}
                        value={workInfo.workEnd}
                        type="date"
                        id="work-end"
                        className="input-field"
                        required
                    />
                    <button type="submit" id="add-work">Add Work</button>
                    <ul>
                        {work.map((w) => {
                        return <li key={w.id}>{w.companyName + "-" + w.positionTitle} <i className="far fa-trash-alt" data-id={w.id} onClick={this.deleteWork}></i></li>
                        })}
                    </ul>
                </form>
                {this.state.matches && (<PreviewSmall generalInfo={generalInfo} education={education} work={work}/>)}
                {!this.state.matches && (<PreviewBig generalInfo={generalInfo} education={education} work={work}/>)}
            </div>
        )
    }
}

export default Form