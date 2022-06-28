import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MSQ from "../../components/question/msq";
import FTQ from '../../components/question/tfq';
import Timer from "../../components/timer";
import { questionsType } from '../../constants/appConstants';
import { setQuestionAnswer } from '../../redux/reducers/questionsReducer'

const ShowQuesion = ({ question, toNextQuestion }) => {
  const dispatch = useDispatch()

  const { difficulty } = useSelector(state => state.game)
  const [userAnswer, setUserAnswer] = useState('')
  const [timerCountdown, setTimeCountdown] = useState(30 * (4 - difficulty))

  useEffect(() => {
    setTimeCountdown(30 * (4 - difficulty))
  }, [question]);

  const handleAnswerSubmit = () => {
    dispatch(setQuestionAnswer({ answer: userAnswer }))
    toNextQuestion()
  }

  const handleAnswerSkip = () => {
    dispatch(setQuestionAnswer({ answer: null }))
    toNextQuestion()
  }

  return (
    <div>
      <div className="m-1 rounded" style={{ width: "100px" }} >
        <Timer time={timerCountdown} />
      </div>
      <div className="container p-3">
        {question.type === questionsType.MULTIPLE ?
          <MSQ body={question.question} userAnswer={setUserAnswer} answers={[...question.incorrect_answers, question.correct_answer]} /> :
          <FTQ body={question.question} userAnswer={setUserAnswer} />
        }
        <div className="d-flex justify-content-center my-4">
          <button onClick={handleAnswerSkip} className="btn btn-primary py-2  mx-2">
            {" "}
            <span className="px-4"> Skip </span>{" "}
          </button>
          <button onClick={handleAnswerSubmit} className="btn btn-success py-2 mx-2">
            {" "}
            <span className="px-4"> Next </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowQuesion;
