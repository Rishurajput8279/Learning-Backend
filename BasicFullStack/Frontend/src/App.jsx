import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);
  const URL = '/api/jokes';

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setJokes(response.data); 
      })
      .catch((error) => {
        console.log(`Error is: ${error}`);
      });
  }, []); 

  return (
    <>
      <h1>Chai and FullStack | Youtube</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes && jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
