import React from 'react';
import firebase from './firebase';
import LikeCounter from './LikeCounter'
import saladImg from './assets/salad.jpg'
import soupImg from './assets/soup.jpg'
import dessertImg from './assets/dessert.jpg'

const RecipeMod = (props) => {
    // Function to remove recipe from DOM and database on click
    const removeRecipe = () => {
        const recipeRef = firebase.database().ref(`/recipes/${props.id}`);
        recipeRef.remove();
    }

    // Image array for assigning an image to recipe type
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

    // Map over foodTypeImage, if property name === props.type, show image

    let imageUrl;

    const setImage = () => {
        foodTypeImage.map((foodType) => {
            if (foodType.type === props.type) {
                imageUrl = foodType.url;
            }
            return null;
        })
    }

    setImage();

    return (
        <React.Fragment>
            {/* Individual recipe modules */}
            <div className="recipeImage">
            <img src={imageUrl} alt="salad"></img>
            </div>
            <div className="recipeInfo">
            <h3>{props.name}</h3>
            <p>
                <span>Chef: </span>
                {props.author}
            </p>
            <p>
                <span>Dish type:</span> {props.type}
            </p>
            <p>
                <span>Prep time:</span> {props.time}
            </p>
            <p>
                <span>Prep Info:</span>
                {props.instructions}
            </p>
            <button
                onClick={e => {
                if (
                    window.confirm("Are you sure you wish to delete this recipe?")
                )
                    removeRecipe(e);
                }}
            >
                Remove Recipe
            </button>
            <LikeCounter likes={props.likes} buttonId={props.id} />
            </div>
        </React.Fragment>
    );
    }

export default RecipeMod;