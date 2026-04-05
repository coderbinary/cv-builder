import '../styles/Editor.css'
import Education from './Education'
import Personal from './Personal'
import Work from './Work'
function Editor({personalDetails,educationDetails,workDetails}){
  return(
      <div className='editor'>
        <Personal personalDetails={personalDetails}/>
        <Work workDetails={workDetails}/>
        <Education educationDetails={educationDetails}/>
      </div>
  )
}

export default Editor