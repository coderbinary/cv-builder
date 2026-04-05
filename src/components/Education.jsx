import { useState } from 'react'
import '../styles/Education.css'

function Content({style, educationDetails}){
  const [mode, setMode] = useState("default")
  const [school, setSchool] = useState("")
  const [course, setCourse] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [editingSchool, setEditingSchool] = useState(null) // tracks which school is being edited

  function handleSubmit(e){
    e.preventDefault()
    const newSchoolEntry = {school, course, startDate, endDate}
    educationDetails.setEducation([...educationDetails.education, newSchoolEntry])
    setMode("default")
  }

  function handleEditClick(schooldata){
    // pre-fill form with existing data
    setEditingSchool(schooldata)
    setSchool(schooldata.school)
    setCourse(schooldata.course)
    setStartDate(schooldata.startDate)
    setEndDate(schooldata.endDate)
    setMode("edit")
  }
  function handleDelete(){
    const updatedEducation = educationDetails.education.filter(s => s.school !== editingSchool.school)
    educationDetails.setEducation(updatedEducation)
    setMode("default")
  }

  function handleEditSubmit(e){
    e.preventDefault()
    const updatedEntry = {school, course, startDate, endDate}

    // replace the old object with updated one, order preserved
    const updatedEducation = educationDetails.education.map(s =>
      s.school === editingSchool.school ? updatedEntry : s
    )

    educationDetails.setEducation(updatedEducation)
    setEditingSchool(null)
    setMode("default")
  }

  if(mode === "default"){
    return (
      <div className='education-content' style={style}>
        {
          educationDetails.education.map((schooldata) => {
            return(
              <div key={schooldata.school} className='school'>
                <p className='school-name'>{schooldata.school}</p>
                <button onClick={() => handleEditClick(schooldata)}>
                  <i className='fa-solid fa-pencil'></i>
                </button>
              </div>
            )
          })
        }
        <button onClick={() => setMode("add")}><i className='fa-solid fa-add'></i></button>
      </div>
    )
  } else if(mode === "add"){
    return(
      <div className='education-content' style={style}>
        <form className='add-education--form' onSubmit={handleSubmit}>
          <div className='inp-grp'>
            <label htmlFor="school-name">School Name :</label>
            <input type="text" name="schoolName" id="school-name" onChange={e => setSchool(e.target.value)}/>
          </div>
          <div className='inp-grp'>
            <label htmlFor="course-name">Course :</label>
            <input type="text" name="courseName" id="course-name" onChange={e => setCourse(e.target.value)}/>
          </div>
          <div className='inp-grp'>
            <label htmlFor="start-date">Start Date :</label>
            <input type="text" name="startDate" id="start-date" onChange={e => setStartDate(e.target.value)}/>
          </div>
          <div className='inp-grp'>
            <label htmlFor="end-date">End Date :</label>
            <input type="text" name='endDate' id='end-date' onChange={e => setEndDate(e.target.value)}/>
          </div>
          <div className='btns'>
            <button onClick={() => setMode("default")}><i className='fa-solid fa-x'></i></button>
            <button type='submit'><i className='fa-solid fa-floppy-disk'></i></button>
          </div>
        </form>
      </div>
    )
  } else {
    // edit mode
    return(
      <div className='education-content' style={style}>
        <form className='add-education--form' onSubmit={handleEditSubmit}>
          <div className='inp-grp'>
            <label htmlFor="school-name">School Name :</label>
            <input type="text" name="schoolName" id="school-name" defaultValue={editingSchool?.school} onChange={e => setSchool(e.target.value)}/>
          </div>
          <div className='inp-grp'>
            <label htmlFor="course-name">Course :</label>
            <input type="text" name="courseName" id="course-name" defaultValue={editingSchool?.course} onChange={e => setCourse(e.target.value)}/>
          </div>
          <div className='inp-grp'>
            <label htmlFor="start-date">Start Date :</label>
            <input type="text" name="startDate" id="start-date" defaultValue={editingSchool?.startDate} onChange={e => setStartDate(e.target.value)}/>
          </div>
          <div className='inp-grp'>
            <label htmlFor="end-date">End Date :</label>
            <input type="text" name='endDate' id='end-date' defaultValue={editingSchool?.endDate} onChange={e => setEndDate(e.target.value)}/>
          </div>
          <div className='btns'>
            <button type='button' onClick={() => setMode("default")}><i className='fa-solid fa-x'></i></button>
            <button type='button' onClick={handleDelete}><i className='fa-solid fa-trash'></i></button>
            <button type='submit'><i className='fa-solid fa-floppy-disk'></i></button>
          </div>
        </form>
      </div>
    )
  }
}

function Education({educationDetails}){
  const [isCollapsed, setIsCollapsed] = useState(true)

  return(
    <div className='education'>
      { isCollapsed 
        ? <div onClick={() => setIsCollapsed(false)} className='education-title'>
            <p>Education</p>
            <i className='fa-solid fa-angle-down'></i>
          </div> 
        : <div onClick={() => setIsCollapsed(true)} className='education-title'>
            <p>Education</p>
            <i className='fa-solid fa-angle-up'></i>
          </div>
      }
      {
        isCollapsed 
          ? <Content educationDetails={educationDetails} style={{display:"none"}}/> 
          : <Content educationDetails={educationDetails} style={{display:"flex"}}/>
      }
    </div>
  )
}

export default Education