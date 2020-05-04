import React from 'react';
import RecipeMod from './RecipeMod'

const ShowRecipes = (props) => {
    console.log(props.recipeId)
    return (
      <section id="recipeList" className="wrapper">
        <ul className="recipe">
          {props.display.map((recipe, i) => {
            return (
              <li key={i}>
                <RecipeMod
                  id={recipe.id}
                  name={recipe.name}
                  author={recipe.author}
                  type={recipe.type}
                  instructions={recipe.instructions}
                  time={recipe.time}
                  deleteRecipe={props.removeButton}
                  likes={recipe.likes}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
}

export default ShowRecipes;