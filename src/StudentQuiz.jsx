import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "./constants";
import axios from "axios";

function StudentQuiz() {
  const [welcome, setWelcome] = useState(true);
  const [thankyou, setThankyou] = useState(false);
  const [quiz, setQuiz] = useState({});
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const params = useParams();

  let getQuiz = async () => {
    try {
      const quizResp = await axios.get(
        `${config.api}/quiz/attend-quiz/${params.quizId}`
      );
      setQuiz(quizResp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  let handleStart = () => {
    setWelcome(false);
  };

  let handleNext = () => {
    setCurrentQuizIndex(currentQuizIndex + 1);
  };

  let handlePrevious = () => {
    setCurrentQuizIndex(currentQuizIndex - 1);
  };

  let handleAnswer = (questionId, optionId) => {
    console.log(questionId, optionId);
    answers.findIndex((answer) => answer.questionId === questionId) > -1
      ? setAnswers(
          answers.map((answer) =>
            answer.questionId === questionId ? { questionId, optionId } : answer
          )
        )
      : setAnswers([...answers, { questionId, optionId }]);
  };

  let handleFinish = async () => {
    try {
      const resultresp = await axios.post(
        `${config.api}/quiz/submit-quiz/${params.quizId}`,
        {
          quizId: quiz._id,
          answers,
        }
      );
      setScore(resultresp.data.score);
      setThankyou(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <>
      {welcome && !thankyou && (
        <div>
          Welcome
          <button onClick={handleStart}>Start</button>
        </div>
      )}

      {!welcome && !thankyou && (
        <div>
          {quiz.questions && quiz.questions[currentQuizIndex].question}
          <br />
          {quiz.questions &&
            quiz.questions[currentQuizIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option._id}
                  onChange={(e) => {
                    handleAnswer(
                      quiz.questions[currentQuizIndex]._id,
                      e.target.value
                    );
                  }}
                  checked={
                    answers.findIndex(
                      (answer) =>
                        answer.questionId ===
                        quiz.questions[currentQuizIndex]._id
                    ) > -1 &&
                    answers.find(
                      (answer) =>
                        answer.questionId ===
                        quiz.questions[currentQuizIndex]._id
                    ).optionId === option._id
                      ? true
                      : false
                  }
                />
                {option.value}
              </div>
            ))}

          <button onClick={handlePrevious} disabled={currentQuizIndex === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuizIndex === quiz.questions.length - 1}
          >
            Next
          </button>
          <button onClick={handleFinish}>Finish</button>
        </div>
      )}

      {!welcome && thankyou && <div>Thanks {score}</div>}
    </>
  );
}

export default StudentQuiz;
