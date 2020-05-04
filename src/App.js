// App.js
import React, { Component } from 'react';
import firebase from './firebase';
import './styles/App.scss';

import Form from './Form';
import ShowRecipes from "./ShowRecipes";

// get our fontawesome imports
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  // Set up Constructor and call Super to establish current state of input properties, as well as an empty recipes array.
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  // Connect the application to Firebase to draw info from it furing the componentDidMount stage of the app.
  componentDidMount() {
    const dbRef = firebase.database().ref("recipes");
    dbRef.on("value", response => {
      // The array that the parent recipes object values will be put into
      const newState = [];

      // Response.val() gives back the parent recipes object containing each recipe child object.
      let recipes = response.val();

      // Let the key parameter into the recipes object. This action gives access to the unique key that Firebase generates for each object that's pushed into it (upon execution of the handleSubmit button)
      for (let key in recipes) {
        newState.push({
          id: key,
          name: recipes[key].name,
          author: recipes[key].author,
          type: recipes[key].type,
          instructions: recipes[key].instructions,
          time: recipes[key].time,
          likes: parseInt(recipes[key].likes)
        });
      }

      // Fill the empty recipes array (declared on initial state) with the value of the newState array
      this.setState({
        recipes: newState
      });
    });
  }

  render() {
    return (
      <main>
        <nav>
          <div className="links">
            <a href="/#recipeList" class="button">
              Check Out All Recipes
            </a>
            <a href="/#newRecipe" class="button">
              Add a New Recipe
            </a>
          </div>
        </nav>
        <header className="wrapper">
          <div className="introText">
            <FontAwesomeIcon icon={faFeatherAlt} className="bigIcon" />
            <h1>My Cookbook</h1>
            <h2>
              Record the secret family recipe{" "}
              <span>(that your Grandma wrote out by hand)</span> in a database,
              so that you never forget it!
            </h2>
            <a href="/#newRecipe" class="button">
              Get Started
            </a>
          </div>
          <div className="element"></div>
        </header>
        <Form />
        <ShowRecipes
          display={this.state.recipes}
          recipeId={this.state.recipes.id}
        />
      </main>
    );
  }
}

export default App;
