import '../styles/Preview.css'

function Preview({personalDetails,educationDetails}){
  return (
    <>
      <p>{personalDetails.fullName}</p>
      <p>{personalDetails.email}</p>
      <p>{personalDetails.location}</p>
      
      {
        educationDetails.map((education)=>{
          return(
          <div key={education.school}>
            <p>{education.school}</p>
            <p>{education.course}</p>
            <p>{education.startDate}</p>
            <p>{education.endDate}</p>
          </div>
          )
        })
      }
    </>
  )
}

export default Preview