import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to={"/dashboard/list-all-quizes"}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Quizes</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to={"/dashboard/quiz-links"}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Quiz Links</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
