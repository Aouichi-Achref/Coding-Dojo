import React from 'react'
import { useState } from 'react';

const PersoneCard = (props) => {


  const [count, setCount] = useState(props.age)


  const addyear = () =>{
    setCount(count+1)
  }

  return (
    <div>
    <h1>{props.first_name}, {props.last_name} </h1>
    <h2>{count}</h2>
    <h2>Hair Color : {props.hairColor}</h2>
    <button onClick={ addyear }>Happy birthday</button>
    </div>
  )
}

export default PersoneCard
