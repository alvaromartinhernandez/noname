//import { AppRouter } from "./router/AppRouter";

import { category } from "./db";
import { CategoryPage } from "./pages/CategoryPage";
//import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("init!");
  return (
    <>
      <header>HEADER</header>
      <hr />
      <div>Featured products</div>
        <hr/>
        <CategoryPage categoryListProps={category} />
  
      <hr />
      <footer>footer</footer>
    </>
  );
}

export default App;
