import { useState } from 'react'
import '../styles/Education.css'

const array = [{"School":"University of Tokyo","Degree":"Btech in CSE","Start Date":"09/2021","End Date":"08/2025"},]
function Education(){
  const [mode, setMode] = useState("default")

  const changeTo = (chgTo) =>{
      setMode(chgTo)
    }
  const renderContent = () =>{
    if(mode === "default"){
      return (
        <>
          <div onClick={()=>changeTo("show")} className='education-dropdown'>
            <p className='title'>Education</p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </>
      )
    }else if(mode === "show"){
      return(
        <>
          <div onClick={()=>changeTo("default")} className='education-dropdown'>
            <p className='title'>Education</p>
            <i className="fa-solid fa-angle-up"></i>
          </div>
          <div className='info'>
            {
              array.map((school)=>{
                return(
                  <div className='school-container'>
                    <div className='school'>{school["School"]}</div>
                    <button><i className='fa-solid fa-pencil'></i></button>
                  </div>
                )
              })
            }
          <button className='add-more'><i className='fa-solid fa-add'></i></button>
          </div>
        </>
      )
    }
  }

  return(
    <div className='education'>
      {
        renderContent()
      }
    </div>
  )
}

export default Education