import React from 'react'
import { useParams } from 'react-router-dom';



const Red=()=> {
  const {word,color} = useParams()

  return (
    <fieldset>
    <legend style={{color:color}}><span style={{color:'red'}}>Wellcome </span> </legend>
    <h1>emm {word} is this your color</h1>
    </fieldset>
  )
}

export default Red