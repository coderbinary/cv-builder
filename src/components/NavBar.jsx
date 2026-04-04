import '../styles/NavBar.css'

function NavBar({currentMode,changeModeTo}){
  return(
    <nav className='navbar'>
      {currentMode === "editor" ? <div className='edit selected' onClick={()=>changeModeTo("editor")}><i className="fa-solid fa-pen-to-square"></i></div> : <div className='edit' onClick={()=>changeModeTo("editor")}><i className="fa-solid fa-pen-to-square"></i></div>}
      
      {currentMode === "preview" ? <div className='show-preview selected' onClick={()=>changeModeTo("preview")}><i className="fa-solid fa-eye"></i></div> : <div className='show-preview' onClick={()=>changeModeTo("preview")}><i className="fa-solid fa-eye"></i></div>}
    </nav>
  )
}

export default NavBar