import './App.css';
import PersoneCard from './components/PersoneCard';


function App() {

  const message = 'message from App.js'
  console.log(message)
  
  return (
    
    <fieldset className="App">
      <legend>🔥🔥🔥app.js🔥🔥🔥</legend>
      <h1>hello from the third world....</h1>

        <div>
      <PersoneCard first_name={"oussema"} last_name={"atig"} age={25} hairColor="brown"></PersoneCard>
      <PersoneCard first_name={"souhail"} last_name={"skanji"} age={24} hairColor="Black"></PersoneCard>
      <PersoneCard first_name={"Adam"} last_name={"salha"} age={23} hairColor="blond"></PersoneCard>

    </div>
    </fieldset>
    
  );
}

export default App;


