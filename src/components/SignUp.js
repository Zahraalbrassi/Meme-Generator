import React from 'react'

function SignUp() {
    const [signUp, setSignUp] =React.useState({
        email:"",
        password:"",
        ConfirmPassword:"",
        okayToEmail:false
        })
        
        function handelChange(event){
          const{ name, value, type, checked} =event.target
        setSignUp(prevSignUp =>{
          return{
            ...prevSignUp,
            [name]:type=== "checkbox" ? checked :value  
          }
        })
        }
         function handleSubmit(event) {
          event.preventDefault()
          if (signUp.password === signUp.ConfirmPassword){
            console.log("Successfully signed up")
          } else{
            console.log ("passwords do not match") 
          return
        }
            if (signUp.okayToEmail){
              console.log("Thanks for signing  up for our newsletter!")
        
            }
         
        }
  return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
        <input 
            type="email" 
            placeholder="Email address"
            className="form--input"
            name='name'
            value={signUp.email}
            onChange={handelChange}
        />
        <input 
            type="password" 
            placeholder="Password"
            className="form--input"
            name='password'
            value={signUp.password}
            onChange={handelChange}
        />
        <input 
            type="password" 
            placeholder="Confirm password"
            className="form--input"
            name='ConfirmPassword'
            value={signUp.ConfirmPassword}
            onChange={handelChange}
        />
        
        <div className="form--marketing">
            <input
                id="okayToEmail"
                type="checkbox"
                name='okayToEmail'
                checked={signUp.okayToEmail}
                onChange={handelChange}
                
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button 
            className="form--submit"
        >
            Sign up
        </button>
    </form>
     </div>
  )
}

export default SignUp