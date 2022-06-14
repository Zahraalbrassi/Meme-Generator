import React from 'react'

function Body(props) {
  return (
    <section>
        <h1>Welcome Back, {props.user}!</h1>
    </section>
  )
}

export default Body