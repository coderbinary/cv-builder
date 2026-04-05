import { useState } from 'react'
import '../styles/Personal.css'

function Content({personalDetails,style}){
  const [isEditmode,setisEditMode] = useState(false)
  const [fullName,setFullName] = useState(personalDetails.personal?.fullName || "")
  const [email,setEmail] = useState(personalDetails.personal?.email || "")
  const [location,setLocation] = useState(personalDetails.personal?.location || "")
  const setPersonalDetails = ()=>{
    personalDetails.setPersonal({fullName,email,location})
    setisEditMode(false)
  }
  function renderContent(){
    if(isEditmode){
      return(
        <>
        <div className='inp-grp'>
          <label htmlFor="fullName">Full Name: </label>
          <input type="text" name="fullName" id="fullName" placeholder="eg. John Doe" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
        </div>
        <div className='inp-grp'>
          <label htmlFor="emailId">Email: </label>
          <input type="text" name="emailId" id="emailId" placeholder="eg. johndoe@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='inp-grp'>
          <label htmlFor="location">Location: </label>
          <input type="text" name="location" id="location" placeholder="eg. Asia,Bangkok" value={location} onChange={(e)=>setLocation(e.target.value)}/>
        </div>
        <div className='btns'>
          <button onClick={()=>setisEditMode(false)} className='cancel'><i className='fa-solid fa-x'></i></button>
          <button onClick={setPersonalDetails} className='save'><i className='fa-solid fa-floppy-disk'></i></button>
        </div>
        </>
      )
    }else{
      return(
        <>
        <p className='full-name'>Full Name: <span>{fullName}</span></p>
        <p className='email'>Email: <span>{email}</span></p>
        <p className='location'>Location: <span>{location}</span></p>
        <button onClick={()=>setisEditMode(true)} className='edit-details'><i className='fa-solid fa-pencil'></i></button>
        </>
      )
    }
  }
  return(
    <div className='personal-content' style={style}>{renderContent()}</div>
  )
}

function Personal({personalDetails}){
  const [isCollapsed,setIsCollapsed] = useState(true)
  return(
    <div className='personal'>
      {
        isCollapsed ?  <div onClick={()=>setIsCollapsed(false)} className='personal-title'>
          <p>Personal Details</p>
          <i className='fa-solid fa-angle-down'></i>
        </div> :         <div onClick={()=>setIsCollapsed(true)} className='personal-title'>
          <p>Personal Details</p>
          <i className='fa-solid fa-angle-up'></i>
        </div>
      }
      {
        isCollapsed ? <Content personalDetails={personalDetails} style={{display:"none"}}/> : <Content personalDetails={personalDetails} style={{display:"flex"}}   />
      }    
    </div>
  )
}

export default Personal