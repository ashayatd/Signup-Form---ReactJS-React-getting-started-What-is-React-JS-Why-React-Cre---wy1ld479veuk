import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
const [getError, setError] = useState("") ;
const [getForm, setForm] = useState({
  name:"",
  email:"",
  gender:"male",
  phoneNumber:"",
  password:""
});

const OnchangeHandler = (event)=>{
setForm({
  ...getForm,
  [event.target.name]:event.target.value
})
}
const OnsubmitHandler = (event)=>{
  let errorFlag = false;
  let flag = false;
  event.preventDefault();
  if(getForm.name==="" || getForm.email==="" || getForm.phoneNumber==="" || getForm.password===""){
    setError("All fields are mandatory");
    errorFlag = true;
  }
  for(let i=0; i<getForm.email.length ;i++){
    if(getForm.email[i]==="@"){
      flag=true;
    }
  }
  if(flag===false){setError("Email must contain @") 
  errorFlag=true}
  if(getForm.gender===""){
    setError("Please identify as male, female or others")
    errorFlag = true;}
  
  if(errorFlag===false){
    setError("")
  }
}

  return (
    <>
    <form>
      <div>
        Name: <input data-testid='name' onChange={OnchangeHandler} name="name" /> 
      </div>
      <div>
        Email: <input data-testid = 'email' name="email" onChange={OnchangeHandler} />
      </div>
      <div>
        <select data-testid="gender" onChange={OnchangeHandler} name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div>
        Phone Number: <input data-testid = 'phoneNumber' type='number' name="phoneNumber" onChange={OnchangeHandler} />
      </div>
      <div>
        Password: <input  data-testid = 'password' type='password' name="password" onChange={OnchangeHandler} />
      </div>
      <button data-testid = 'submit' onClick={OnsubmitHandler}>
        Submit
      </button><br/>
      {getError}
    </form>
    </>
  )
}


export default App;
