import React from 'react'

function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
function toggle(){
    
    setIsShown(prevIsShown  => !prevIsShown ) 

   
}


  return (
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchLine}</p>}
      <button  onClick={ toggle }> {isShown? "Hide" : "Show" }PunchLine  </button>
      
    </div>
  )
}

export default Joke