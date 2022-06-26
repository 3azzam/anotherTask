import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCategories as getCategoriesApi } from "../../networking/categoriesApis";
import Loader from "../../components/loader";

const ListQuestions = () => {
  const categoriesNumbers = useSelector(
    (state) => state.game.categoriesNumbers
  );

  const [selectionLimit, setSelectionLimit] = useState(categoriesNumbers);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategoriesApi()
      .then((res) => {
        setCategories(res.data.trivia_categories);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  const handleCategorySelect = (id) => {
    const isSelected = selectedCategories.some((s) => s === id);

    if(!isSelected && selectionLimit === 0) return

    if (isSelected) {
      setSelectedCategories((prev) => prev.filter((f) => f !== id));
      setSelectionLimit(selectionLimit + 1);
    } else {
      setSelectionLimit(selectionLimit - 1);
      setSelectedCategories((prev) => [...prev, id]);
    }
  };

  console.log("selectedCategories", selectedCategories);

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
        <div className="row px-2">
          {categories.map((cat) => (
            <div key={cat.id} className="mb-3 col-3">
              <button
                type="checkbox"
                onClick={() => handleCategorySelect(cat.id)}
                className={`btn h-100 w-100 btn-success inline-block ${
                  selectedCategories.some((s) => s === cat.id)
                    ? "border-selected"
                    : ""
                }`}
              >
                {cat.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListQuestions;
