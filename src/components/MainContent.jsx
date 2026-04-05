import { useState } from 'react'
import '../styles/MainContent.css'
import NavBar from './NavBar';
import Editor from './Editor';
import Preview from './Preview';

function MainContent(){
  const [mode,setMode] = useState("editor");
  const[personal,setPersonal] = useState({fullName:"John Doe",email:"johndoe@gmail.com",location:"Asia,Bangkok"})
  const [education,setEducation] = useState([{school:"Mahidol University",course:"Btech in Computer Science & Engineering",startDate:"06/2021",endDate:"07/2025"}])
  const [work, setWork] = useState([{company:"MindTree",location:"USA",jobTitle:"Tech Lead",startDate:"09/2025",endDate:"09/2028",experience:"Collaborated with cross-functional teams to translate design concepts into interactive, user-friendly applications."}])
  return(
    <div className='mainContent'>
      <NavBar currentMode={mode} changeModeTo={setMode}/>
      {
        mode === "editor" ? <Editor
                            workDetails={{work,setWork}} 
                            educationDetails={{education,setEducation}} personalDetails={{personal,setPersonal}}/> : <Preview educationDetails={education} personalDetails={personal}/>
      }
    </div>
  )
}

export default MainContent