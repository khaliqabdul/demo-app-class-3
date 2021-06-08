import React from 'react';
function Dinner(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Today we are serving {props.dishName}</p>
            <p>And {props.sweetDish}</p>
            <img alt={props} src={props.imageUrl} height="150" width="300" aligh="left"></img>
        </div>
    )
}
export default Dinner;