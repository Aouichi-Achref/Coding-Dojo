// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const message = 'message from App.js'
  console.log(message)
  
  return (
    
    <fieldset className="App">
      <legend>🔥🔥🔥app.js🔥🔥🔥</legend>
      <h1>hello from the third world....</h1>

        <div>
      <PersonCard first_name={"oussema"} last_name={"atig"} age={25} hairColor="brown"></PersonCard>
      <PersonCard first_name={"souhail"} last_name={"skanji"} age={24} hairColor="Black"></PersonCard>
      <PersonCard first_name={"Adam"} last_name={"salha"} age={23} hairColor="blond"></PersonCard>

    </div>
    </fieldset>
    
  );
}

export default App;
