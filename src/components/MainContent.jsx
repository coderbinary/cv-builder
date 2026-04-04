import { useState } from 'react'
import '../styles/MainContent.css'
import NavBar from './NavBar';
import Editor from './Editor';
import Preview from './Preview';

function MainContent(){
  const [mode,setMode] = useState("editor");
  const[personal,setPersonal] = useState({fullName:"",email:"",location:""})
  return(
    <div className='mainContent'>
      <NavBar currentMode={mode} changeModeTo={setMode}/>
      {
        mode === "editor" ? <Editor 
                              personalDetails={{personal,setPersonal}}/> : <Preview personalDetails={personal}/>
      }
    </div>
  )
}

export default MainContent