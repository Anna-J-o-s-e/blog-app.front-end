import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {


    const [data, setdata] = useState(
        {

            "emailId": { type: String, required: true },
            "password": { type: String, required: true }

        }

    )
    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/signin", data).then((response) => {
            console.log(data)
            if (response.data.status == "success") {
                alert("Signed in Successfully")

            } else {
                alert("Error")

            }
        }).catch()
    }

    return (
        <div>

            <center><h1>SIGN IN</h1></center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text" className="form-control" value={data.emailId} name='emailId' onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-warning" onClick={readvalue}>Sign In</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           <Link to="/signup">    <button className="btn btn-warning">Sign Up</button></Link> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default SignIn