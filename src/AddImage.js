// import React, { Component } from 'react';
// import saladImg from './assets/salad.jpg'
// import soupImg from './assets/soup.jpg'
// import dessertImg from './assets/dessert.jpg'

// class AddImage extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "",
//             author: "",
//             type: "",
//             instructions: ""
//         };
//     }

//     foodTypeImage = {
//         salad: {
//             id: 1,
//             url: './assets/salad.jpg'
//         },
//         soup: {
//             id: 2,
//             url: './assets/soup.jpg'
//         },
//         dessert: {
//             id: 3,
//             url: './assets/dessert.jpg'
//         }
//     }


//     // map over foodTypeImage, if property name === props.type, show image
//     addImage = () => {
//         const selectedFoodType = props.type;

//         for (let i = 0; i < foodTypeImage.length; i++) {
//             const imageUrl = foodTypeImage[i].url;

//             if (imageUrl.includes(selectedFoodType)) {
//                 return (
//                     <img src={imageUrl} alt={foodTypeImage[i]}></img>
//                 )
//             }
//         }
//     }

//     render(){
//         return(

//         )
//     }
// }

// export default AddImage;