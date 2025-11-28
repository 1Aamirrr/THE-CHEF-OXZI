import React, { useEffect } from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";

import { getRecipeFromChefOxzi } from "./ai";
import { Behavior } from "@google/genai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipeMarkdown, setRecipeMarkdown] = React.useState("");
  const recipeSection = React.useRef(null);
  React.useEffect(() => {
    if (recipeMarkdown !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipeMarkdown]);
  async function getRecipe() {
    const md = await getRecipeFromChefOxzi(ingredients);
    console.log(md);
    setRecipeMarkdown(md);
    setRecipeShown(true);
  }

  function addIngredient(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const newIngredient = form.elements.ingredient.value;
    if (newIngredient) {
      setIngredients((prev) => [...prev, newIngredient]);
      form.reset();
    }
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}

      {recipeShown && <ClaudeRecipe markdown={recipeMarkdown} />}
    </main>
  );
}
