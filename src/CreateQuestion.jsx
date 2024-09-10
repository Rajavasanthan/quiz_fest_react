import { Link } from "react-router-dom"

function CreateQuestion() {
  return (
    <div>
        <h1>CreateQuestion</h1>
        <Link to={"/dashboard/view-quiz/1"}>Save</Link>
    </div>
  )
}

export default CreateQuestion