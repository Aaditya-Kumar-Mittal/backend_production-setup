import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
  axios
    .get("/api/jokes")
    .then((response) => {
      console.log("Received data:", response.data);
      setJokes(response.data);
    })
    .catch((error) => console.log("Error fetching jokes:", error));
}, []);

  return (
    <div>
      <h1>Production Level Backend Setup</h1>

      <h2>JOKES : {jokes.length}</h2>

      {jokes.map((joke, index) => (
        <div key={index}>
          <h3>{joke.title}</h3>
          <h5>{joke.content}</h5>
        </div>
      ))}
    </div>
  );
}

export default App;
