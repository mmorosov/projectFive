import React from 'react';
import firebase from './firebase';
import LikeCounter from './LikeCounter'
import saladImg from './assets/salad.jpg'
import soupImg from './assets/soup.jpg'
import dessertImg from './assets/dessert.jpg'

const RecipeMod = (props) => {
    const removeRecipe = () => {
        const recipeRef = firebase.database().ref(`/recipes/${props.id}`);
        recipeRef.remove();
    }

    const foodTypeImage = [
        {
            type: 'salad',
            id: 1,
            url: saladImg
        },
        {
            type: 'soup',
            id: 2,
            url: soupImg
        },
        {
            type: 'dessert',
            id: 3,
            url: dessertImg
        }
    ]

    // loop over foodTypeImage, if property name === props.type, show image

    let imageUrl;

    const setImage = () => {
        foodTypeImage.map((foodType, i) => {
            console.log(foodType)
            console.log(props.type)
            if (foodType.type === props.type) {
                imageUrl = foodType.url;
            }
        })
    }

    console.log(setImage())

    return (
        <React.Fragment>
            <img src={ imageUrl } width="200px" alt="salad"></img>
            <h3>{props.name}</h3>
            <p>{props.author}</p>
            <p>{props.type}</p>
            <p>{props.instructions}</p>
            <button onClick={removeRecipe}>
            Remove Recipe
            </button>
            <LikeCounter buttonId={props.id}/>
            <hr />
        </React.Fragment>
    );
}

export default RecipeMod;