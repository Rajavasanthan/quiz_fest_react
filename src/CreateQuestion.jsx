import { Link } from "react-router-dom";

function CreateQuestion() {
  return (
    <div>
      <div className="container">
        <form>
          <div className="row m-3">
            <div className="col-lg-12 mt-3 mb-5">
              <div>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Question"
                />
              </div>
            </div>
            <div className="col-lg-6 mb-5 d-flex form-check">
              <input
                className="form-check-input"
                id="option1"
                name="options"
                type="radio"
              />
              <input
                type="number"
                htmlFor="option1"
                className="form-control text-center col-lg-2 mr-3"
              />
              <input
                className="form-control col-lg-9"
                htmlFor="option1"
                placeholder="Option 1"
              />
            </div>
            <div className="col-lg-6 d-flex form-check mb-5">
              <input
                className="form-check-input"
                type="radio"
                id="option2"
                name="options"
              />
              <input
                type="number"
                htmlFor="option2"
                className="form-control text-center col-lg-2 mr-3"
              />
              <input
                className="form-control"
                htmlFor="option2"
                placeholder="Option 2"
              />
            </div>
            <div className="col-lg-6 d-flex form-check mb-5">
              <input
                className="form-check-input"
                type="radio"
                id="option3"
                name="options"
              />
              <input
                type="number"
                htmlFor="option3"
                className="form-control text-center col-lg-2 mr-3"
              />
              <input
                className="form-control col-lg-9"
                htmlFor="option3"
                placeholder="Option 3"
              />
            </div>
            <div className="col-lg-6 d-flex form-check mb-5">
              <input
                className="form-check-input"
                type="radio"
                id="option4"
                name="options"
              />
              <input
                type="number"
                htmlFor="option4"
                className="form-control text-center col-lg-2 mr-3"
              />
              <input
                className="form-control"
                htmlFor="option4"
                placeholder="Option 4"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link to={"/dashboard/view-quiz/1"}>
              <button type="submit" className="btn btn-primary btn-lg">
                Save
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateQuestion;
