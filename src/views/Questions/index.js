import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ShowQuesion from "./showQuestion";
const QuestionsList = () => {
  const navigate = useNavigate();

  const [questionCount, setQuestionCount] = useState(0);

  const { selectedCategoriesDetails, remainingCategories, categoriesNumbers } = useSelector((state) => state.game)
  const { questionsList, questionsAnswers } = useSelector((state) => state.questions);

  useEffect(() => {
    if (questionsList.length > 0 && questionCount >= questionsList.length) {

      Math.abs(selectedCategoriesDetails.length - remainingCategories.length) >= categoriesNumbers ?
        navigate("/score") :
        navigate('/categories')
    }
  }, [questionCount]);

  const toNextQuestion = () => {
    setQuestionCount(questionCount + 1);
  };

  if (questionCount >= questionsList.length) {
    return <></>;
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="container rounded bg-info m-5">
        <ShowQuesion
          toNextQuestion={toNextQuestion}
          question={questionsList[questionCount]}
        />
      </div>
    </div>
  );
};

export default QuestionsList;
