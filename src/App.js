// import logo from './images/logo.svg';
import './App.css';
import { useState } from 'react'; // import useState from react

function App() {

  const [name, setName] = useState("Anita")

  const handlClick = () => {
    setName("Welcome to my react app");
    console.log(name);
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handlClick}>Change Name</button>
    </div>
  );
}

export default App;
