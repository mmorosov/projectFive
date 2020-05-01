import React, { Component } from 'react'
import firebase from "./firebase";

class LikeCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            likes: 0
        }
    }

    // Create function that executes on button click, updating the like value in the recipe child object on database and in DOM.
    
    addLikes = () => {

        let newAmount = this.state.likes + 1;
        
        const recipeRef = firebase.database().ref(`/recipes/${this.props.buttonId}`);

        recipeRef.update({
            likes: newAmount
        })

        this.setState({
            likes: newAmount
        });
    }



    render(){
        return(
            <button onClick={this.addLikes} id={this.props.buttonId} className="likes">::Heart:: {this.state.likes}</button>
        )
    }
}

export default LikeCounter;