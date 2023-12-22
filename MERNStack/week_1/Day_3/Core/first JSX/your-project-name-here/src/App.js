import './App.css';

function App() {
  const toDo= ["learn react","Climb Mt everest","Run a marahon","feed the dogs"]
  return (
    <fieldset >
      <legend>🔥🔥🔥first JSX🔥🔥🔥</legend>
      <h1>Hello DOJO</h1>
      {/* <ul>
        <li>Learn React</li>
        <li>Climb Mt everest</li>

        <li>Run a marahon</li>
        <li>feed the dogs</li>
      </ul> */}

      {toDo.map((Do, index)=><h6 key={index}> {Do}</h6>)}
      <h6>toDo : {toDo}</h6> 
    </fieldset>

  );
}

export default App;
