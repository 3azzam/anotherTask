import { useState, useEffect } from "react";
import _ from "lodash";

const MSQ = ({ body, answers }) => {
  const [selectedAnswer, setSelectedAnaswer] = useState(null);
  const [questionAnwsers, setQuestionAnwsers] = useState([]);

  useEffect(() => {
    setQuestionAnwsers(_.shuffle(answers));
  }, [answers]);

  return (
    <div className="p-3">
      <p className="text-center mb-4">{body}</p>
      <div className="row">
        {questionAnwsers.map((answer) => (
          <div key={answer} className="col-6 mb-3">
            <button
              className={`w-100 btn btn-lg btn-success ${
                selectedAnswer === answer ? "border border-dark" : ""
              }`}
              onClick={() => setSelectedAnaswer(answer)}
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
