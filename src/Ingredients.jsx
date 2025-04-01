import spinner from "./assets/752.gif";

export default function IngredientsList(props) {
    const ingredientsListItem = props.ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ));

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItem}</ul>
            {props.ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button
                        className={`get-recipe-btn ${props.loading ? "loading" : ""}`}
                        onClick={props.getRecipe}
                        disabled={props.loading}
                    >
                        {props.loading ? (
                            <img src={spinner} alt="Loading..." className="spinner" />
                        ) : (
                            "Get a recipe"
                        )}
                    </button>
                </div>
            )}
        </section>
    );
}
