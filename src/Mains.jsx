import { useState } from "react";
import ClaudeRecipe from "./claudeRecipe";
import IngredientsList from "./Ingredients";
import { getRecipeFromMistral } from "./ai";

function Section() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(false);

    function reset(e) {
        e.preventDefault();
        setIngredients([]);
        setRecipe("");
        setLoading(false);
    }

    async function getRecipe() {
        setLoading(true);
        const generatedRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(generatedRecipe);
        setLoading(false);
    }

    function handle(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    return (
        <main className="Mainsection">
            <form action={handle} className="add-ingredient-form">
                <input type="text" name="ingredient" placeholder="      e.g. oregano" />
                <button>Click me!</button>
                <button onClick={reset}>New Recipe</button>
            </form>

            {ingredients.length > 0 ? (
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} loading={loading} />
            ) : null}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}

export default Section;
