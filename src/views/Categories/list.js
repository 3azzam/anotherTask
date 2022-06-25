import { useEffect, useState } from "react";
import { getCategories as getCategoriesApi } from "../../networking/categoriesApis";

const ListQuestions = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesApi().then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  return (
    <div className="container">
      <div className=" my-4 p-4 bg-info rounded d-flex flex-column align-items-center">
        <h1 className="mb-3" > Question Categories</h1>
        <div className="row px-2">
          {categories.map((cat) => (
            <div key={cat.id} className="mb-3 col-3">
              <button className="btn h-100 w-100 btn-success inline=block ">
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
