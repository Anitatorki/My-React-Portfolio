// import logo from './images/logo.svg';
import './App.css';
import { useState } from 'react'; // Correct import statement for useState

function App() {
  
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: "THOR: LOVE AND THUNDER", id: 1, date: "2022-07-08" },
    { title: "BLACK PANTHER: WAKANDA FOREVER", id: 2, date: "2022-11-11" },
    { title: "THE MARVELS", id: 3, date: "2022-02-17" },
    { title: "TOP GUN: MAVERICK", id: 4, date: "2022-05-27" },
    { title: "MISSION: IMPOSSIBLE 7", id: 5, date: "2022-09-30" },
    { title: "THE BATMAN", id: 6, date: "2022-03-04" },
    { title: "THE FLASH", id: 7, date: "2022-11-04" },
    { title: "JURASSIC WORLD: DOMINION", id: 8, date: "2022-06-10" },
    { title: "EMILY IN PARIS", id: 9, date: "2022-12-16" },
    { title: "THIS IS US", id: 10, date: "2022-12-16" },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })    
  }

  return (
    <div className="App">

      {
      showEvents && (
      <div>
        <button onClick ={() => setShowEvents(false)}>Hide</button>
      </div>
        )
      }

      {
      !showEvents && (
      <div>
        <button onClick ={() => setShowEvents(true)}>Show</button>
      </div>
      )
      }

      {
        showEvents && events.map((event, index) => (
          <div key={event.id}><h2>{index +1} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;

