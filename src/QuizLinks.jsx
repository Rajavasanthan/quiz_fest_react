import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function QuizLinks() {
  return (

    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div classNames="container-fluid">
          <form className="d-flex">
            <div class="p-2 g-col-6">
              <input className="form-control " type="search" placeholder="Title" aria-label="Title" />
            </div>
            <div class="p-2 g-col-6">
              <input className="form-control " type="search" placeholder="Date" aria-label="Date" />
            </div>
            <div class="p-2 g-col-6">
              <button className="btn btn-primary me-md-5" type="submit">Search</button>
            </div>
          </form>
        </div>
      </nav>
      <div>
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Title</th>
              <th scope="col">Score</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">vasanth</th>
              <td>11 sep</td>
              <td>maths</td>
              <td>20</td>
              <td><Link to={"/dashboard/view-link/1"}><FaEye /></Link></td>
            </tr>
            <tr>
              <th scope="row">vasanth</th>
              <td>13 sep</td>
              <td>tamil</td>
              <td>10</td>
              <td><Link to={"/dashboard/view-link/1"}><FaEye /></Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default QuizLinks;
