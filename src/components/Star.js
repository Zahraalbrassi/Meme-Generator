import React from 'react'

function Star(props) {
    const starIcon =props.isFilled ? "star-filled.png" : "star-empty.png"
   
  return (
    <div>

        < img 
        className='card--fav'
      onClick={props.handeleClick}
        src={`./images/${starIcon}` 
     }  
        
        />
    </div>
  )
}

export default Star