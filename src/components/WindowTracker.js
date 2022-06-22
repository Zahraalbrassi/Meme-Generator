import React, { useEffect } from 'react'

function WindowTracker() {
    const[windowWidth, setWindowWidth]= React.useState(window.innerWidth)
   useEffect(()=> {  
    window.addEventListener("resize", function(){
        setWindowWidth(window.innerWidth)
    })
        },  [])
      
    
  return (
    <div>
           <h1>Window width: {window.innerWidth}</h1>
    </div>
  )
}

export default WindowTracker