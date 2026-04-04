import '../styles/Editor.css'
import Education from './Education'
import Personal from './Personal'
import Work from './Work'
function Editor({personalDetails}){
  return(
      <div className='editor'>
        <Personal personalDetails={personalDetails}/>
        <Work/>
        <Education/>
      </div>
  )
}

export default Editor