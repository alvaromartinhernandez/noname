//import { AppRouter } from "./router/AppRouter";

import { category } from "./db";
import { CategoryPage } from "./pages/CategoryPage";
//import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("init!");
  return (
    <>
      <header className="app-header"></header>
      <div className="app-content">
      <div className="bar-info center"><h1>Bar Tolo</h1></div>
      <hr />
      <div>Featured products</div>
      <CategoryPage categoryListProps={category} />
      <footer>footer</footer>
      </div>
    </>
  );
}

export default App;
