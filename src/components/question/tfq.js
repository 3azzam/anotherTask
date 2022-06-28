import { useState } from "react";

const TFQ = ({ body, userAnswer }) => {
  const [selectedAnswer, setSelectedAnaswer] = useState(null);

  const handleAnswerSelect = (answer) => {
    setSelectedAnaswer(answer)
    userAnswer(answer)
  }

  return (
    <div className="p-3" >
      <p className="text-center mb-4" >{body}</p>
      <div className="d-flex justify-content-center" >
        <button onClick={() => handleAnswerSelect('True')} className={`btn btn-lg mx-2 btn-primary ${selectedAnswer ? 'border border-dark' : ''}`}>
          {" "}
          <span className="px-4 py-2"> True </span>{" "}
        </button>
        <button onClick={() => handleAnswerSelect('False')} className={`btn btn-lg mx-2 btn-danger ${!selectedAnswer ? 'border border-dark' : ''}`}>
          {" "}
          <span className="px-4 py-2"> False </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default TFQ;
