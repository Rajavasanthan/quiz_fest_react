import { Link } from "react-router-dom";

function QuizLinks() {
  return (
    <div>
      <h1>QuizLinks</h1>
      <Link to={"/dashboard/view-link/1"}>View</Link>
    </div>
  );
}

export default QuizLinks;
