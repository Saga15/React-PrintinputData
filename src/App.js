import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <input type="text" onChange={(e) => setData(e.target.value)}></input>
      <br />
      <br />
      <button onClick={() => setResult(data)}>Print Name</button>
      <br />
      <br />
      <h1 className="saga">{result}</h1>
    </div>
  );
}
