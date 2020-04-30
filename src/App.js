// App.js
import React, { Component } from 'react';
import firebase from './firebase';
import './styles/App.scss';

// Step 1: Setup: HTML | SCSS | Firebase
// Step 2: Rig up input connections
// Step 3: Research creating objects through user input

class App extends Component {
  // Set up Constructor and call Super to establish current state of input properties, as well as an empty recipes array.
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: '',
      type: '',
      instructions: '',
      recipes: []
    }
    // Create new functions binding 'this' to the object in which the method is called, rather than the global window (necessary because ES6 arrow functions have global rather than local scope).
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Connect the application to Firebase to draw info from it furing the componentDidMount stage of the app.
  componentDidMount() {
    const dbRef = firebase.database().ref('recipes');
    dbRef.on('value', (response) => {
      const newState = [];
      
      // Response.val() gives back the parent recipes object containing each recipe child object.
      let recipes = response.val();
      
      // Let the key parameter into the recipes object. This will allow mapping the child recipe objects into an array.
      for (let key in recipes) {
        newState.push({
          id: key,
          name: recipes[key].name,
          author: recipes[key].author,
          type: recipes[key].type,
          instructions: recipes[key].instructions
        });
      }

      this.setState({
        recipes: newState
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const dbRef = firebase.database().ref('recipes');
    const recipe = {
      name: this.state.name,
      author: this.state.author,
      type: this.state.type,
      instructions: this.state.instructions
    }

    dbRef.push(recipe);
    this.setState({
      name: '',
      author: '',
      type: '',
      instructions: ''
    });
  }  

  render() {
    return (
      <div className="App">
        <h1>My Database Connection Works</h1>
        <ul>
          {/* {this.state.recipes.map(recipe => {
            return <li>{recipe}</li>;
          })} */}
        </ul>
        <h1>My Recipe Book</h1>
        <form action="" className="recipeEntry">
          <input
            type="text"
            name="name"
            placeholder="recipeName"
            onChange={this.handleChange}
            defaultValue={this.state.name}
          ></input>
          <input
            type="text"
            name="author"
            placeholder="authorName"
            onChange={this.handleChange}
            defaultValue={this.state.author}
          ></input>
          <select
            name="type"
            onChange={this.handleChange}
            defaultValue={this.state.type}
          >
            <option value="">Pick One</option>
            <option value="salad">Salad</option>
            <option value="soup">Soup</option>
            <option value="desert">Desert</option>
          </select>
          <textarea
            name="instructions"
            placeholder="instructions"
            onChange={this.handleChange}
            defaultValue={this.state.instructions}
          ></textarea>
          <button onClick={this.handleSubmit} type="submit">
            Add Recipe
          </button>
        </form>

        <section>
          <div>
            <ul>
              {this.state.recipes.map((recipe) => {
                return (
                  <li key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.author}</p>
                    <p>{recipe.type}</p>
                    <p>{recipe.instructions}</p>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
