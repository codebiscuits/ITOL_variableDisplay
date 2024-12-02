import './App.css';

function App() {
  return (
    <div className="App">
      <VariableDisplay />
    </div>
  );
}

function VariableDisplay() {

  // declare variables
  let stringVar = "Welcome to React";
  let numberVar = 42;
  let booleanVar = true;
  let arrayVar = ["React", "JSX", "Variables"];
  let objectVar = { name: "John", age: 30, role: "Developer" };

  // conditional variable
  if (Math.random() > 0.5) {
    stringVar = "Welcome to advanced React";
  }

  return (
    <div className="VariableDisplay">
      <h1>{stringVar}</h1>
      <p>numberVar = {numberVar}</p>
      <p>booleanVar = {booleanVar?"true":"flase"}</p>

      <h2>arrayVar items:</h2>
      {arrayVar.map(
        (item) => (
        <p key={item.index}>- {item}</p>
      )
      )}

      <h2>objectVar properties:</h2>
      <pre>{JSON.stringify(objectVar, null, 2)}</pre>
    </div>
  );
}

export default App;
