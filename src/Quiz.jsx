import { Link } from "react-router-dom";

function Quiz() {
  return (
    <div>
      <h1>Quiz</h1>
      <Link to={"/dashboard/1/create-question"}>Create Question</Link>
    </div>
  );
}

export default Quiz;
