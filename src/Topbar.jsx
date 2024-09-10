import { Link } from "react-router-dom";

function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <Link to={"/"} className="btn btn-sm btn-danger ml-auto">
        Logout
      </Link>
    </nav>
  );
}

export default Topbar;
