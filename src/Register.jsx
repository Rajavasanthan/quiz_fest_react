import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
        <>
        <div className="basebox container-fluid d-flex flex-row" style={{ backgroundColor: "skyblue", height: "100vh", width: "auto" }}>
          <div className="row col-lg-12 d-flex ">
            <div className="container-fluid col-lg-6 " style={{ backgroundColor: "dodgerblue", height: "100vh", width: "100vh" }}>
              <div className="row">
    
                <div className="container " style={{ marginLeft: "200px", marginTop: "300px", color: "white" }} >
                  <span><h2><i>Test Your Knowledge</i></h2></span>
                  <span><h2><i>Challange Your Limits</i></h2></span>
                </div>
                <div className="container " style={{ marginLeft: "200px", marginTop: "10px", color: "white" }} >
                  <h3>Answer</h3>
                  <h3>Learn</h3>
                  <h3>Repeat</h3>
                </div>
              </div>
            </div>
            <div className="container-fluid col-lg-6" style={{ backgroundColor: "hsl(194, 30%, 86%)", height: "100vh", width: "100vh" }}>
              <div className="row col-lg-12" style={{ height: "100vh", width: "100vh" }}>
                <div className="d-flex  row " >
                  <div className="container ">
                    <div className="d-flex">
                      <img src="src/assets/Q.png" alt="" style={{ height: "100px", width: "100px" }} />
                    </div>
                    <div className="" style={{ marginLeft: "160px", width: "80vh", color: "black" }}><h3><strong>Quiz Fest</strong></h3>
                    </div>
                  </div>
                  <div className="d-flex p-2 align-items-end" style={{ marginLeft: "160px", width: "80vh", color: "black" }}><h4><strong>Login</strong></h4></div>
                </div>
                <div>
                  <div className="container row col-lg-6" style={{ marginLeft: "130px" }}>
                    <div className="form-outline w-100">
                      <label className="form-label">Email</label>
                      <input type="text" id="input1" className="form-control" />
                    </div>
                    <div className="form-outline w-100">
                      <label className="form-label">Password</label>
                      <input type="text" id="input1" className="form-control" />
                      <Link to={"/dashboard/list-all-quizes"} className="btn btn-primary" style={{ marginTop: "10px" }}>Create Account</Link>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        {/* <Link to={"/dashboard/list-all-quizes"}>Login</Link> */}
      </>
      )
    }