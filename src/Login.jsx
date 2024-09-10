import { Link } from "react-router-dom"

function Login() {
  return (
    <>
    <div>Login</div>
    <Link to={"/dashboard/list-all-quizes"}>Login</Link>
    </>
  )
}

export default Login