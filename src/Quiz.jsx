import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import "./assets/css/quizViewPage.css"

function Quiz() {
  return (
    <div className="quizViewBlock p-4">
      <div className="headerBlock d-flex align-items-center justify-content-between">
        <h1 className="headingOne">General Knowledge</h1>
        <Link className="btn btnPrimary" to={"/dashboard/1/create-question"}>Create Question</Link>
      </div>
      <div className="quizQAndADisplayBlock">
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> <span className="mr-2">Q1.</span> Which planet is known as the Red Planet?</Accordion.Header>
        <Accordion.Body>
             <ul className="optionsListBlock">
                <li className="optionItem"><span className="optionNum">1 . </span> Venus</li>
                <li className="optionItem"><span className="optionNum">2 . </span> Earth</li>
                <li className="optionItem"><span className="optionNum">3 . </span> Mars</li>
                <li className="optionItem"><span className="optionNum">4 . </span> Jupiter</li>
              </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <span className="mr-2">Q2.</span> What is the capital city of France?</Accordion.Header>
        <Accordion.Body>
              <ul className="optionsListBlock">
                <li className="optionItem"><span className="optionNum">1 . </span> London</li>
                <li className="optionItem"><span className="optionNum">2 . </span> Berlin</li>
                <li className="optionItem"><span className="optionNum">3 . </span> Madrid</li>
                <li className="optionItem"><span className="optionNum">4 . </span> Paris</li>
              </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> <span className="mr-2">Q3.</span> Who wrote the play "Romeo and Juliet"?</Accordion.Header>
        <Accordion.Body>
              <ul className="optionsListBlock">
                <li className="optionItem"><span className="optionNum">1 . </span> William Shakespeare</li>
                <li className="optionItem"><span className="optionNum">2 . </span> Charles Dickens</li>
                <li className="optionItem"><span className="optionNum">3 . </span> Mark Twain</li>
                <li className="optionItem"><span className="optionNum">4 . </span> J.K. Rowling</li>
              </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> <span className="mr-2">Q4.</span> What is the largest mammal in the world?</Accordion.Header>
        <Accordion.Body>
              <ul className="optionsListBlock">
                <li className="optionItem"><span className="optionNum">1 . </span>  Elephant</li>
                <li className="optionItem"><span className="optionNum">2 . </span> Blue Whale</li>
                <li className="optionItem correct"><span className="optionNum">3 . </span> Giraffe <span className="imgIcon correct"> </span></li>
                <li className="optionItem wrong"><span className="optionNum">4 . </span> Polar Bear <span className="imgIcon wrong"> </span></li>
              </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header> <span className="mr-2">Q5.</span> Which element has the chemical symbol 'O'?</Accordion.Header>
        <Accordion.Body>
              <ul className="optionsListBlock">
                <li className="optionItem"><span className="optionNum">1 . </span> Oxygen</li>
                <li className="optionItem"><span className="optionNum">2 . </span>  Gold</li>
                <li className="optionItem"><span className="optionNum">3 . </span> Ozone</li>
                <li className="optionItem"><span className="optionNum">4 . </span> Osmium</li>
              </ul>
        </Accordion.Body>
      </Accordion.Item>
  
    </Accordion>
      </div>
      
    </div>
  );
}

export default Quiz;
