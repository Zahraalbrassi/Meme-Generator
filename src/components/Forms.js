import React from 'react'

function Forms() {
    const [dataform, setDataForm]= React.useState({
        firstName : "",
        lastName : "",
        email:"",
        comment:"",
        isFriendly: true,
        employment : "",
      favColor:""  
      })
     
    
       function handelChange(event){
        const {name, value, type, checked} = event.target
    setDataForm(prevDataForm => {
      return {
        ...prevDataForm,
        [name]:type=== "checkbox" ? checked :value  
      }
    })
    }
     function handelSubmit(event){
    event.preventDefault()
    console.log(dataform)
     }
      return (
        
       
          <div className="div">
    <form onSubmit={handelSubmit}>
      <input 
    type="text"
    placeholder='First Name'
    onChange={handelChange} 
    name = "firstName"
    value={dataform.firstName}
    />
    <input
    type='text'
    placeholder='Last Name'
    onChange={handelChange}
    name ="lastName"
    value={dataform.lastName}
    />
    <input 
    type='email'
    placeholder='E-mail'
    onChange={handelChange}
    name="email"
    value={dataform.email} 
    />
    <textarea
    placeholder='Comment'
    onChange={handelChange}
    name='comment'
    value={dataform.comment} />
     <input 
     type='checkbox'
     id='isFriendly'
     name='isFriendly'
     checked={dataform.isFriendly}
     onChange={handelChange}/>
     <label  htmlFor='isFriendly'> Are You Friendly?</label>
     <br/>
     <br />
                
                <fieldset>
                    <legend>Current employment status</legend>
                    
                    <input 
                        type="radio"
                        id="unemployed"
                        name='employment'
                       value="unemployed"
                       checked={dataform.employment === "unemployed"}
                       onChange ={handelChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="part-time"
                        name='employment'
                        value="part-time"
                        checked={dataform.employment === "part-time}"}
                        onChange ={handelChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="full-time"
                        name='employment'
                        value="full-time"
                        checked={dataform.employment === "full-time" }
                        onChange ={handelChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                    
                </fieldset>
                <label htmlFor='favColor' > What's Your Fav Color</label>
                <br/>
                <select id='favColor' value={dataform.favColor} name ="favColor" onChange={handelChange}>
                <option value="">--Choose--</option>
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green"> Greem</option>
                  <option value="blue">Blue</option>
                  <option value="indigo">Indigo</option>
                  <option value="violat">violat</option>
                </select>
                <br/>
                <br />
                <button >Submit </button>
    </form>
         </div>
  )
}

export default Forms