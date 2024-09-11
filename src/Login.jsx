import { Link } from "react-router-dom"

function Login() {
  return (
    <>
      <div className="basebox justify-content-center d-flex flex-row" style={{ backgroundColor: "skyblue", height: "100vh", width: "auto" }}>
        <div className="row col-lg-12">
          <div className="container-fluid " style={{ backgroundColor: "dodgerblue", height: "100vh", width: "100vh" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="container fst-italic" style={{ marginLeft: "200px", marginTop: "300px", color: "white" }} >
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
          </div>
          <div className="container-fluid" style={{ backgroundColor: "bisque", height: "100vh", width: "100vh" }}>
            <div className="row">
              <div className="col-lg-12">
                <p>hhhhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to={"/dashboard/list-all-quizes"}>Login</Link> */}
    </>
  )
}

export default Login