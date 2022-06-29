import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const Score = () => {
  const { questionsList, questionsAnswers } = useSelector(state => state.questions)
  const { playerName } = useSelector((state) => state.auth);

  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0)

  useEffect(() => {
    if (questionsList.length > 0 && questionsAnswers.length > 0) {
      let scoreCounter = 0
      let fullTimeTaken = 0
      questionsList.forEach((question, idx) => {
        scoreCounter += question.correct_answer === questionsAnswers[idx].answer
        fullTimeTaken += questionsAnswers[idx].time
      });
      setScore(scoreCounter)
      setTimeTaken(fullTimeTaken)
    }
  }, []);

  return (
    <div>
      <div className="container rounded bg-info my-4 mx-auto px-3 py-4">
        <h1> {playerName} </h1>
        <p>
          {" "}
          You Scored {score} out of {questionsList.length}{" "}
        </p>
        <p className="h2" > Time Taken <span> {timeTaken} </span> </p>
      </div>
    </div>
  );
};

export default Score;
