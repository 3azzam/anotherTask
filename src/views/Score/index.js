import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { calcPieResult } from "./calcResult";

import PieChart from "../../components/chart/pie";

import { flushAll } from "../../utils/localStorage";
const ScoreView = () => {
  const navigate = useNavigate();

  // reducers
  const { questionsList, questionsAnswers } = useSelector(
    (state) => state.questions
  );
  const { playerName } = useSelector((state) => state.auth);

  // states
  const [score, setScore] = useState({ timeTaken: 0, correctAnswers: 0 });
  const [chartData, setChartData] = useState({ labels: [], series: [] });

  useEffect(() => {
    if (questionsAnswers.length && questionsList.length) {
      const { chart, score } = calcPieResult(questionsAnswers);
      setChartData(chart);
      setScore(score);
    }
  }, []);

  const timeDisplay = (seconds) => {
    const remainingMinutes = parseInt(seconds / 60, 10);
    const remainingSeconds = seconds % 60;
    if (remainingMinutes === 0) {
      return `${remainingSeconds} Seconds`;
    }
    return `${
      remainingMinutes > 9 ? remainingMinutes : `0${remainingMinutes}`
    }:${
      remainingSeconds > 9 ? remainingSeconds : `0${remainingSeconds}`
    } Minutes`;
  };

  const handleNewGame = () => {
    flushAll();
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <h1 className="py-2 mb-1"> Hello : {playerName} </h1>
      </div>
      <div className="container rounded bg-info mb-4 mx-auto px-3 py-4">
        <p className="h4">
          {" "}
          You Scored {score.correctAnswers} out of {questionsList.length}{" "}
        </p>
        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <div className="d-flex justify-content-center align-items-center p-3 h-100">
              <p className="h2">
                {" "}
                Time Taken <span> {timeDisplay(score.timeTaken)} </span>{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <div className="d-flex justify-content-center align-items-center p-3 h-100">
              <PieChart chartData={chartData} />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center my-3">
          <button onClick={handleNewGame} className="btn btn-lg btn-primary">
            {" "}
            <span className="px-2"> New Game </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreView;
