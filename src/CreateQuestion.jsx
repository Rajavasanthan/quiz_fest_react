import axios from "axios";
import { useFormik } from "formik";
import { config } from "./constants";
import { useNavigate, useParams } from "react-router-dom";

function CreateQuestion() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      question: "",
      options: [
        { value: "", mark: 0, isCorrect: false },
        { value: "", mark: 0, isCorrect: false },
        { value: "", mark: 0, isCorrect: false },
        { value: "", mark: 0, isCorrect: false },
      ],
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          `${config.api}/question/add-question/${params.quizId}`,
          values
        );
        navigate(`/dashboard/view-quiz/${params.quizId}`);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row m-3">
            <div className="col-lg-12 mt-3 mb-5">
              <div>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Question"
                  name="question"
                  onChange={formik.handleChange}
                  value={formik.values.question}
                />
              </div>
            </div>
            {formik.values.options.map((option, index) => {
              return (
                <div key={index} className="col-lg-6 mb-5 d-flex form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`options.isCorrect`}
                    value={formik.values.options[index].isCorrect}
                    onChange={(e) => {
                      console.log(
                        `options[${index}].isCorrect`,
                        e.target.checked
                      );
                      formik.setFieldValue(
                        `options[${index}].isCorrect`,
                        e.target.checked
                      );
                      formik.setFieldValue(`options[${index}].mark`, 10);

                      // Mark isCorrect false for other options
                      formik.values.options.forEach((option, i) => {
                        if (i !== index) {
                          formik.setFieldValue(`options[${i}].mark`, 0);
                        }
                      });

                      // for (let i of formik.values.options) {
                      //   if (i !== index) {
                      //     formik.setFieldValue(`options[${i}].isCorrect`, false);
                      //     formik.setFieldValue(`options[${i}].mark`, 0);
                      //   }
                      // }
                    }}
                    checked={
                      formik.values.options[index].isCorrect ? true : false
                    }
                  />
                  <input
                    type="number"
                    htmlFor="option1"
                    className="form-control text-center col-lg-2 mr-3"
                    value={formik.values.options[index].mark}
                    name={`options[${index}].mark`}
                    onChange={formik.handleChange}
                  />
                  <input
                    className="form-control col-lg-9"
                    type="text"
                    htmlFor="option1"
                    placeholder="Option 1"
                    value={formik.values.options[index].value}
                    name={`options[${index}].value`}
                    id={`option${index}`}
                    onChange={formik.handleChange}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateQuestion;
