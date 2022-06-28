import { useState, useEffect } from "react";
import _ from "lodash";

const MSQ = ({ body, answers, userAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionAnwsers, setQuestionAnwsers] = useState([]);

  useEffect(() => {
    setQuestionAnwsers(_.shuffle(answers));
  }, [answers]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
    userAnswer(answer)
  }

  return (
    <div className="p-3">
      <p className="text-center mb-4">{body}</p>
      <div className="row">
        {answers.map((answer) => (
          <div key={answer} className="col-6 mb-3">
            <button
              className={`w-100 btn btn-lg btn-success ${selectedAnswer === answer ? "border border-dark" : ""
                }`}
              onClick={() => handleAnswerSelect(answer)}
            >
              {answer}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MSQ;
