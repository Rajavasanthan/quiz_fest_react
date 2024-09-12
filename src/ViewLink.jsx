import { useParams } from "react-router-dom";
import "./assets/css/quizReviewPage.css";
import axios from "axios";
import { config } from "./constants";
import { useEffect, useState } from "react";

function ViewLink() {
  const params = useParams();
  const [quizLink, setQuizLink] = useState({});
  let getLink = async () => {
    try {
      const linkResp = await axios.get(
        `${config.api}/quizLink/link/${params.linkId}`
      );
      setQuizLink(linkResp.data);
    } catch (error) {
      console.log(error);
    }
  };

  let userAnswerIsCorrect = (questionId, optionId) => {
    let useRep = quizLink.response.find((opt) => {
      return opt.questionId === questionId && opt.selectedOptionId === optionId;
    });
    return useRep;
  };

  useEffect(() => {
    getLink();
  }, []);
  return (
    <div className="quizViewBlock p-4">
      <div className="headerBlock d-flex align-items-center justify-content-between">
        <h1 className="headingOne">{quizLink?.quizId?.title}</h1>
        <div className="score h3 text-bold">Score - {quizLink?.score}</div>
      </div>
      <div className="quizQAndADisplayBlock">
        {quizLink?.quizId?.questions?.map((question, index) => {
          return (
            <div key={index} className="questionListBlock p-3 incorrect">
              <div className="questionContent d-flex">
                <span className="mr-10px">1.</span>
                <div className="d-flex">
                  <div>{question.question}</div>
                </div>
              </div>
              <hr className="hrTitle border-0 text-center position-relative" />
              <div className="answerBlock">
                {question.options.map((option, index) => {
                  return (
                    <>
                      <div key={index} className="option d-flex">
                        {userAnswerIsCorrect(question._id, option._id)
                          ?.isCorrect && (
                          <div className="chooseOption correct mr-10px">
                            <span className="imgIcon correct"></span>
                          </div>
                        )}
                        {!userAnswerIsCorrect(question._id, option._id)
                          ?.isCorrect &&
                          option.isCorrect && (
                            <div className="chooseOption correct mr-10px">
                              <span className="imgIcon correct"></span>
                            </div>
                          )}

                        {!userAnswerIsCorrect(question._id, option._id)
                          ?.isCorrect &&
                          option._id ==
                            userAnswerIsCorrect(question._id, option._id)
                              ?.selectedOptionId && (
                            <div className="chooseOption wrong mr-10px">
                              <span className="imgIcon wrong"> </span>
                            </div>
                          )}
                        <p>{option.value}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewLink;

{
  /* <div className="chooseOption correct mr-10px">
                            <span className="imgIcon correct"></span>
                          </div> */
}
