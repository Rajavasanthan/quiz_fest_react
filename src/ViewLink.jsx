import "./assets/css/quizReviewPage.css"

function ViewLink() {
  return (
    <div className="quizViewBlock p-4">
      <div className="headerBlock d-flex align-items-center justify-content-between">
        <h1 className="headingOne">General Knowledge - Review Questions</h1>
        <div className="score h3 text-bold" >Score - 8/10</div>
      </div>
      <div className="quizQAndADisplayBlock">
        <div className="questionListBlock p-3 incorrect">
            <div className="questionContent d-flex">
                <span className="mr-10px">1.</span>
                <div className="d-flex">
                  <div>Which is the Nam Woo-hyun's first album? </div>
                </div>
            </div>
            <hr className="hrTitle border-0 text-center position-relative"/>
            <div className="answerBlock">
                  <div className="option d-flex">
                    <div className="chooseOption correct mr-10px"><span className="imgIcon correct"></span></div>
                    <p>BigBang</p>
                  </div>
                  <div className="option d-flex">
                      <div className="chooseOption wrong mr-10px"><span className="imgIcon wrong"> </span></div>
                      <p>Second Write</p>
                  </div>
                  <div className="option d-flex">
                      <div className="chooseOption mr-10px"></div>
                        <p>A New Journey</p>
                  </div>
                  <div className="option d-flex">
                            <div className="chooseOption mr-10px"></div>
                              <p>Stray Kids</p>
                  </div>
                                                                    
            </div>
        </div>
        <div className="questionListBlock p-3 correct">
            <div className="questionContent d-flex">
                <span className="mr-10px">2.</span>
                <div className="d-flex">
                  <div>In which football team does Nam Woo-hyun currently play? </div>
                </div>
            </div>
            <hr className="hrTitle border-0 text-center position-relative"/>
            <div className="answerBlock">
                  <div className="option d-flex">
                    <div className="chooseOption  mr-10px"></div>
                    <p>Gangwon FC</p>
                  </div>
                  <div className="option d-flex">
                      <div className="chooseOption mr-10px"></div>
                      <p>Daejeon Hana Citizen</p>
                  </div>
                  <div className="option d-flex">
                      <div className="chooseOption mr-10px"></div>
                        <p>Daegu FC</p>
                  </div>
                  <div className="option d-flex">
                            <div className="chooseOption correct mr-10px"><span className="imgIcon correct"></span></div>
                              <p>FC Men</p>
                  </div>
                                                                    
            </div>
        </div>
        <div className="questionListBlock p-3 incorrect">
            <div className="questionContent d-flex">
                <span className="mr-10px">3.</span>
                <div className="d-flex">
                  <div>Which television channel did Nam Woo-hyun work as a judging panel? </div>
                </div>
            </div>
            <hr className="hrTitle border-0 text-center position-relative"/>
            <div className="answerBlock">
                  <div className="option d-flex">
                    <div className="chooseOption mr-10px"></div>
                    <p>Korea New Network</p>
                  </div>
                  <div className="option d-flex">
                      <div className="chooseOption wrong mr-10px"><span className="imgIcon wrong"> </span></div>
                      <p>KBC</p>
                  </div>
                  <div className="option d-flex">
                      <div className="chooseOption  correct mr-10px"><span className="imgIcon correct"></span></div>
                        <p>Tv Chosun</p>
                  </div>
                  <div className="option d-flex">
                            <div className="chooseOption mr-10px"></div>
                              <p>Arirang TV</p>
                  </div>
                                                                    
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewLink