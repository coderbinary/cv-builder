import '../styles/Preview.css'

function Preview({personalDetails}){

  return (
    <>
      <p>{personalDetails.fullName}</p>
      <p>{personalDetails.email}</p>
      <p>{personalDetails.location}</p>
    </>
  )
}

export default Preview