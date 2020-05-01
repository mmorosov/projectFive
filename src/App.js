// App.js
import React, { Component } from 'react';
import firebase from './firebase';
import './styles/App.scss';

import Form from './Form';
import ShowRecipes from "./ShowRecipes";

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
          likes: 0
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
      <div className="App">
        <h1>My Recipe Book</h1>
        <Form />
        <ShowRecipes display={this.state.recipes} recipeId={this.state.recipes.id}/>
      </div>
    );
  }
}

export default App;
