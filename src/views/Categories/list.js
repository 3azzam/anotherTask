import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRemainingCategories } from "../../redux/reducers/gameReducer";
import { getCategories as getCategoriesApi } from "../../networking/categoriesApis";
import { getQuestionsInCategory } from "../../networking/questionsApis";
import Loader from "../../components/loader";
import { toast } from "react-toastify";
import { responseTypes } from "../../constants/appConstants";
import { apiErrorResponse } from "../../utils/apiError";

const ListQuestions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoriesNumbers = useSelector(
    (state) => state.game.categoriesNumbers
  );
  

  const [selectionLimit, setSelectionLimit] = useState(categoriesNumbers);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategoriesApi()
      .then((res) => {
        if (res.data.response_code === responseTypes.SUCCESS) {
          setCategories(res.data.trivia_categories);
        } else {
          toast.error(apiErrorResponse(res.data.response_code));
        }
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("error happend ... please try again later");
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = () => {
    if (!selectedCategory) {
      toast.error("please select one category");
      return;
    }
    const remainingCategories = categories.filter(
      (cat) => cat.id !== selectedCategory
    );
    getQuestionsInCategory().then((res) => {
      if (res.data.response_code === responseTypes.SUCCESS) {
        // dispatch(
        //   setRemainingCategories({ remainingCategories, selectedCategory })
        // );
      }
    });
  };

  if (isLoading) {
    return (
      <div
        style={{ height: "100vh" }}
        className="bg-primary d-flex justify-content-center align-items-center"
      >
        <div className="p-5 m-5">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className=" my-4 p-4 bg-info rounded d-flex flex-column align-items-center">
        <h1 className="mb-3"> Question Categories</h1>
        <div>
          <h4 className="mb-2"> you can selecte up to {selectionLimit} </h4>
        </div>
        <div className="row px-2 mb-3">
          {categories.map((cat) => (
            <div key={cat.id} className="mb-3 col-3">
              <button
                type="checkbox"
                onClick={() => setSelectedCategory(cat.id)}
                className={`btn h-100 w-100 btn-success inline-block ${
                  selectedCategory === cat.id ? "border-selected" : ""
                }`}
              >
                {cat.name}
              </button>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={handleSubmit} className="btn btn-lg btn-success">
            {" "}
            <span className="px-2"> Start </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListQuestions;
