import React from 'react';
import RecipeMod from './RecipeMod'

const ShowRecipes = (props) => {
    console.log(props.recipeId)
    return (
      <section>
        <div>
          <ul>
            {props.display.map(recipe => {
              return (
                  <RecipeMod 
                  id={recipe.id}
                  name={recipe.name}
                  author={recipe.author}
                  type={recipe.type}
                  instructions={recipe.instructions}
                  deleteRecipe={props.removeButton}
                  />
              );
            })}
          </ul>
        </div>
      </section>
    );
}

export default ShowRecipes;