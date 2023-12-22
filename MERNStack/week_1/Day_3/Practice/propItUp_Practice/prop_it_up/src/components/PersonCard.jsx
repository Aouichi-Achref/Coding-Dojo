import React from "react";

const PersonCard = (props) => {
    // person: {firs_name: 'Jane', last_name: 'Doe', age: 45, hair_color: 'Black'}
    console.log(props);
    return (
        <>
        


            <div>
                <h1>{props.first_name}::::::: {props.last_name} </h1>
                <h2>age : {props.age}</h2>
                <h2>Hair Color : {props.hairColor}</h2>
            </div>

        </>
    )
}
export default PersonCard