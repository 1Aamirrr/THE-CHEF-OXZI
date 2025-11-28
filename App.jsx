import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Main from "./body";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
