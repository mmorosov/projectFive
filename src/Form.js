import React, { Component } from 'react';
import firebase from "./firebase";

class Form extends Component {
    constructor() {
        super();
        this.state = {
        name: "",
        author: "",
        type: "",
        instructions: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  // A function executing on change of input value, setting the state of targetted input to the new value. Variables are used to target multiple input fields and their values.
    handleChange = e => {
        this.setState({
        [e.target.name]: e.target.value
        });
    };

  // A function executing on form submission.
    handleSubmit = e => {
        // Prevent form refresh.
        e.preventDefault();

        // If the name value is not empty, access the 'recipes' reference inside of the database, and push a new recipe object and its properties into it.
        if (this.state.name !== "") {
        // Declare a variable for the function calling the database.
        const dbRef = firebase.database().ref("recipes");
        // Declare a variable to represent the object being pushed. In the database, 'recipe' will show as a unique key generated by Firebase.
        const recipe = {
            name: this.state.name,
            author: this.state.author,
            type: this.state.type,
            instructions: this.state.instructions
        };

        // Push the recipe object into the database.
        dbRef.push(recipe);

        // After the object has been pushed into the dabase, reset the input values to clear.
        this.setState({
            name: "",
            author: "",
            type: "",
            instructions: ""
        });
        }
    };

    render() {
        return (
            <section>
                <form onClick={this.handleSubmit} className="recipeEntry">
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        onChange={this.handleChange}
                        value={this.state.name}
                    ></input>
                    <input
                        type="text"
                        name="author"
                        placeholder=""
                        onChange={this.handleChange}
                        value={this.state.author}
                    ></input>
                    <select
                        name="type"
                        onChange={this.handleChange}
                        value={this.state.type}
                    >
                        <option value="">Pick One</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                    </select>
                    <textarea
                        name="instructions"
                        placeholder=""
                        onChange={this.handleChange}
                        value={this.state.instructions}
                    ></textarea>
                    <button type="submit">Add Recipe</button>
                </form>
            </section>
        );
    }
}

export default Form;