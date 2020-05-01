import React from 'react';
import firebase from './firebase';

const RecipeMod = (props) => {
    const removeRecipe = () => {
        const recipeRef = firebase.database().ref(`/recipes/${props.id}`);
        recipeRef.remove();
    }

    return (
      <li key={props.id}>
        <h3>{props.name}</h3>
        <p>{props.author}</p>
        <p>{props.type}</p>
        <p>{props.instructions}</p>
        <button onClick={removeRecipe}>
          Remove Recipe
        </button>
        <hr />
      </li>
    );
}

export default RecipeMod;