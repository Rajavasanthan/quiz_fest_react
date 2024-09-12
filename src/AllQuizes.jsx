import { Link, useNavigate } from "react-router-dom";
import { PencilIcon, EyeIcon, TrashIcon, LinkIcon } from "lucide-react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "./constants";

function AllQuizzes() {
  const [quizes, setQuizes] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  let getQuiz = async () => {
    const allQuizeRes = await axios.get(`${config.api}/quiz/get-all-quiz`);
    setQuizes(allQuizeRes.data);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = async () => {
    try {
      const quizResp = await axios.post(`${config.api}/quiz/create`, { title });
      setShow(false);
      navigate(`/dashboard/view-quiz/${quizResp.data.quizId}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="d-flex">
        <h1 className="">All Quizes</h1>
        <div className="ml-auto">
          <button
            onClick={handleShow}
            className="btn btn-primary "
            to="/dashboard/view-quiz/1"
          >
            Create Quiz
          </button>
        </div>
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Number of Questions</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizes.map((quiz, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{quiz.title}</td>
                <td className="p-4">{quiz.questions.length}</td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <Link className="p-1">
                      <PencilIcon size={20} />
                    </Link>
                    <Link
                      to={`/dashboard/view-quiz/${quiz._id}`}
                      className="p-1"
                    >
                      <EyeIcon size={20} />
                    </Link>
                    <Link className="p-1">
                      <TrashIcon size={20} />
                    </Link>
                    <a
                      href={`${config.domain}/take-quiz/${quiz._id}`}
                      target="_blank"
                      className="p-1"
                    >
                      <LinkIcon size={20} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Main content */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quiz Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="email"
                placeholder="Quiz Title"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AllQuizzes;
