import { useState,useEffect } from 'react'
import './App.css'
// import axios from 'axios'

function App() {
  const [fetchpokemon, setFetchpokemon] = useState([])
  // const [axiosSuperHeros, setAxiosSuperHeros] = useState([])

  const fetchAPI = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => {
        console.log("RESPONSE :", response);
        return response.json()
      })
      .then(response => {
        console.log("FETCH API RESPONSE AS JSON : ", response)
        setFetchpokemon(response)
      })
      .catch(error => console.log("FETCH API ERROR :", error))
  }

  const handleClick = (apiCall,stateVariable, setStateVariable) => {
    console.log("State Variable");
    if(stateVariable.length !=0){
      setStateVariable([])
    } else{
      apiCall()
    }
  }

  // const axiosAPI = () => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon")
  //   .then(response => {
  //     console.log("AXIOS RESPONSE :", response.data)
  //     setAxiosSuperHeros(response.data)
  //   })
  //   .catch(error=> console.log("AXIOS ERROR:", error))
  // }

  return (
    <fieldset>
      <legend><h1>🦹🏼🦸🏼‍♀️ pokemon API 🦹🏼🦸🏼‍♀️</h1></legend>
      <button onClick={fetchAPI}>fetch API</button>
      <button onClick={() => handleClick(fetchAPI, fetchpokemon, setFetchpokemon)}>fetch API</button>
      {/* <button onClick={axiosAPI}>axios API</button> */}
      <div style={{backgroundColor:"cornflowerblue"}}>
        <legend>
          <h4>Fetch Super Heros Array</h4>
        </legend>
        <table>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
          </tr>
          {fetchpokemon.map(pokemon=> <tr key={pokemon.id}>
            <td>{pokemon.id}</td> 
            <td><img src={pokemon.images.sm} alt={pokemon.name}/></td>
            <td>{pokemon.name}</td>
          </tr>)}
        </table>
      </div>

      <div style={{backgroundColor:"crimson"}}>
        <legend>
          <h4>UseEffect Super Heros Array</h4>
        </legend>
        <table>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
          </tr>
          {useEffectPokemon.map(pokemon=> <tr key={pokemon.id}>
            <td>{hero.id}</td>
            <td><img src={pokemon.images.sm} alt={pokemon.name}/></td>
            <td>{hero.name}</td>
          </tr>)}
        </table>
      </div>
      
    </fieldset>
  )
}

export default App
