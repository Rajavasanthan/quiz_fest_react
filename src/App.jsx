import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./sb-admin-2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import DashboardLayout from "./DashboardLayout";
import AllQuizes from "./AllQuizes";
import Quiz from "./Quiz";
import CreateQuestion from "./CreateQuestion";
import QuizLinks from "./QuizLinks";
import ViewLink from "./ViewLink";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="list-all-quizes" element={<AllQuizes />} />
            <Route path="view-quiz/:quizId" element={<Quiz />} />
            <Route
              path=":quizId/create-question"
              element={<CreateQuestion />}
            />
            <Route path="quiz-links" element={<QuizLinks />} />
            <Route path="view-link/:linkId" element={<ViewLink />} />
          </Route>
          <Route path="/take-quiz/:quizId"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
