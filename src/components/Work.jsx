import { useState } from 'react'
import '../styles/Work.css'

function Content({ style, workDetails }) {
  const [mode, setMode] = useState("default")
  const [company, setCompany] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [location, setLocation] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [experience, setExperience] = useState("")  // 👈 added
  const [editingWork, setEditingWork] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const newWorkEntry = { company, jobTitle, location, startDate, endDate, experience }  // 👈
    workDetails.setWork([...workDetails.work, newWorkEntry])
    setMode("default")
  }

  function handleEditClick(workdata) {
    setEditingWork(workdata)
    setCompany(workdata.company)
    setJobTitle(workdata.jobTitle)
    setLocation(workdata.location)
    setStartDate(workdata.startDate)
    setEndDate(workdata.endDate)
    setExperience(workdata.experience)  // 👈 added
    setMode("edit")
  }

  function handleDelete() {
    const updatedWork = workDetails.work.filter(w => w.company !== editingWork.company)
    workDetails.setWork(updatedWork)
    setMode("default")
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    const updatedEntry = { company, jobTitle, location, startDate, endDate, experience }  // 👈
    const updatedWork = workDetails.work.map(w =>
      w.company === editingWork.company ? updatedEntry : w
    )
    workDetails.setWork(updatedWork)
    setEditingWork(null)
    setMode("default")
  }

  if (mode === "default") {
    return (
      <div className='work-content' style={style}>
        {
          workDetails.work.map((workdata) => (
            <div key={workdata.company} className='work-item'>
              <p className='company-name'>{workdata.company}</p>
              <button onClick={() => handleEditClick(workdata)}>
                <i className='fa-solid fa-pencil'></i>
              </button>
            </div>
          ))
        }
        <button onClick={() => setMode("add")}><i className='fa-solid fa-add'></i></button>
      </div>
    )
  } else if (mode === "add") {
    return (
      <div className='work-content' style={style}>
        <form className='add-work--form' onSubmit={handleSubmit}>
          <div className='inp-grp'>
            <label htmlFor="company-name">Company Name :</label>
            <input type="text" id="company-name" onChange={e => setCompany(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="job-title">Job Title :</label>
            <input type="text" id="job-title" onChange={e => setJobTitle(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="location">Location :</label>
            <input type="text" id="location" onChange={e => setLocation(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="start-date">Start Date :</label>
            <input type="text" id="start-date" onChange={e => setStartDate(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="end-date">End Date :</label>
            <input type="text" id="end-date" onChange={e => setEndDate(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="experience">Experience :</label>
            <textarea id="experience" rows={4} onChange={e => setExperience(e.target.value)} />  {/* 👈 added */}
          </div>
          <div className='btns'>
            <button type='button' onClick={() => setMode("default")}><i className='fa-solid fa-x'></i></button>
            <button type='submit'><i className='fa-solid fa-floppy-disk'></i></button>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className='work-content' style={style}>
        <form className='add-work--form' onSubmit={handleEditSubmit}>
          <div className='inp-grp'>
            <label htmlFor="company-name">Company Name :</label>
            <input type="text" id="company-name" defaultValue={editingWork?.company} onChange={e => setCompany(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="job-title">Job Title :</label>
            <input type="text" id="job-title" defaultValue={editingWork?.jobTitle} onChange={e => setJobTitle(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="location">Location :</label>
            <input type="text" id="location" defaultValue={editingWork?.location} onChange={e => setLocation(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="start-date">Start Date :</label>
            <input type="text" id="start-date" defaultValue={editingWork?.startDate} onChange={e => setStartDate(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="end-date">End Date :</label>
            <input type="text" id="end-date" defaultValue={editingWork?.endDate} onChange={e => setEndDate(e.target.value)} />
          </div>
          <div className='inp-grp'>
            <label htmlFor="experience">Experience :</label>
            <textarea id="experience" rows={4} defaultValue={editingWork?.experience} onChange={e => setExperience(e.target.value)} />  {/* 👈 added */}
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

function Work({ workDetails }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className='work'>
      {isCollapsed
        ? <div onClick={() => setIsCollapsed(false)} className='work-title'>
            <p>Work Experience</p>
            <i className='fa-solid fa-angle-down'></i>
          </div>
        : <div onClick={() => setIsCollapsed(true)} className='work-title'>
            <p>Work Experience</p>
            <i className='fa-solid fa-angle-up'></i>
          </div>
      }
      {isCollapsed
        ? <Content workDetails={workDetails} style={{ display: "none" }} />
        : <Content workDetails={workDetails} style={{ display: "flex" }} />
      }
    </div>
  )
}

export default Work