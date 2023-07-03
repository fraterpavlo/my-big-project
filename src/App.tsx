import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import "./styles/index.scss";
import path from "path";
import { MAinPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>main</Link>
      <Link to={"/about"}>about</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MAinPageAsync />}></Route>
          <Route path={"/about"} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
