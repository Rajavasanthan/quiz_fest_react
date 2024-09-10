import { Link } from "react-router-dom";

function AllQuizes() {
  return (
    <div>
      <Link className="btn btn-primary" to={"/dashboard/view-quiz/1"}>Create Quiz</Link>
      <h1>AllQuizes</h1>
    </div>
  );
}

export default AllQuizes;
