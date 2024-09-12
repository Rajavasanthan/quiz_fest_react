import { Link, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "./assets/css/quizViewPage.css";
import axios from "axios";
import { config } from "./constants";
import { useEffect, useState } from "react";

function Quiz() {
  const params = useParams();
  const [quizDetail, setQuizeDetail] = useState({});
  const getQuizDetails = async () => {
    try {
      const quizDetailRep = await axios.get(
        `${config.api}/question/get-question-by-id/${params.quizId}`
      );
      setQuizeDetail(quizDetailRep.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuizDetails();
  }, []);
  return (
    <div className="quizViewBlock p-4">
      <div className="headerBlock d-flex align-items-center justify-content-between">
        <h1 className="headingOne">{quizDetail.title}</h1>
        <Link className="btn btnPrimary" to={`/dashboard/${quizDetail._id}/create-question`}>
          Create Question
        </Link>
      </div>
      <div className="quizQAndADisplayBlock">
        <Accordion defaultActiveKey="0">
          {quizDetail.questions &&
            quizDetail.questions.map((questions, index) => {
              return (
                <Accordion.Item key={index}>
                  <Accordion.Header>
                    {" "}
                    <span className="mr-2">Q{index + 1}.</span>
                    {questions.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="optionsListBlock">
                      {questions.options.map((option, index) => {
                        return (
                          <li key={index} className="optionItem">
                            <span className="optionNum">{index + 1} . </span>{" "}
                            <span className={`${option.isCorrect ? 'text-success' : ''}`}>{option.value}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
        </Accordion>
      </div>
    </div>
  );
}

export default Quiz;
