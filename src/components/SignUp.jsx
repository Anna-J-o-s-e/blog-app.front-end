import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {

const[data,setdata]=useState(
    {

        "name":"",
        "emailId":"",
        "password":""

    }

)
const inputHandler=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/signup",data).then((Response)=>{
        console.log(data)
        if (Response.data.status=="success") {
            alert("Signed Up successfully")
        } else {
          alert("Error")
        }
    }).catch()
}

  return (
    <div>
<center><h1>SIGN-UP</h1></center>
<br /><br />

<div className="container">
    <div className="row">
        <div className="col col-2 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Name</label>
        <input type="text" className="form-control" value={data.name} name='name' onChange={inputHandler}/>
    </div>
    <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Email Id</label>
        <input type="email" name="emailId" onChange={inputHandler} value={data.emailId} id="" className="form-control" />
    </div>
    <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">

        <label htmlFor="" className="form-label">Password</label>
        <input type="password" name="password" value={data.password} onChange={inputHandler}  id="" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-primary" onClick={readValue}>Sign Up</button>
    </div>
</div>

        </div>
    </div>
</div>





    </div>
  )
}

export default SignUp