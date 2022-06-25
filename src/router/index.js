import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "../views/Home";
// import CategoriesList from "../views/Categories/list";
import { routeList } from "./routeList";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(({ path, component }) => (
          <Route key={path} path={path} element={component()} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
