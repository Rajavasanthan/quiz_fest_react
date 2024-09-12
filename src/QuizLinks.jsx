import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "./constants";

function QuizLinks() {
  const [quizLinks, setQuizLinks] = useState([]);
  const allLinks = async () => {
    try {
      const quizlinkResp = await axios.get(
        `${config.api}/quizLink/get-all-links`
      );
      setQuizLinks(quizlinkResp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allLinks();
  }, []);
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <div className="p-2 g-col-6">
              <input
                className="form-control "
                type="search"
                placeholder="Title"
                aria-label="Title"
              />
            </div>
            <div className="p-2 g-col-6">
              <input
                className="form-control "
                type="search"
                placeholder="Date"
                aria-label="Date"
              />
            </div>
            <div className="p-2 g-col-6">
              <button className="btn btn-primary me-md-5" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Score</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            quizLinks.map((quizLink, index) => (
              <tr key={index}>
                <td>{quizLink.quizId.title}</td>
                <td>{quizLink.score}</td>
                <td>
                  <Link to={`/dashboard/view-link/${quizLink._id}`}>
                    <FaEye />
                  </Link>
                </td>
              </tr>
            ))
          }
        
        </tbody>
      </table>
    </div>
  );
}

export default QuizLinks;
