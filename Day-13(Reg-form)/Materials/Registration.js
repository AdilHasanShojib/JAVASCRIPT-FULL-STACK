import React,{useState} from 'react';
import "./reg.css";


 



const Registration = () =>{
 const [inputs,setInputs]=useState({});

 const handleChange=(e)=>{
 const name=e.target.name;
 const value=e.target.value;

 setInputs(values=>({...values, [name]: value}))



 }
 
 const submitChange = (e) =>{
    e.preventDefault();
    console.log("Name:", inputs.name);
    console.log("Password:", inputs.password);
    console.log("Re-Password:", inputs.rePassword);





 }



return(

    <div className="main" >
    <div className="main1">
    <form>
        <h1>Registration Form</h1>
      <label>Name:
        <input
          type="text"
          name="name"
          
          
          onChange={handleChange}
          
        />
      </label>
      <br/>
      <label>Password:
        <input
          type="password"
          name="password"  
          
          onChange={handleChange}
          
        />
      </label>

      <br/>
      <label>Re-Password:
        <input
          type="password"
          name="rePassword"  
          

          onChange={handleChange}

          
        />
      </label>
      <br/>

    <button id="forButton" onClick={submitChange}>Submit</button>
    
    
   
    
  </form>

    </div>
      

    </div>
   
);



};

export default Registration;