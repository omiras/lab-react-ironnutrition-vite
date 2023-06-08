import { useState } from "react";
import "./App.css";

import foodsJson from "./foods.json";

function App() {

  // Create a state variable within the App component and store the foods array in it.
  const [foods, setFoods] = useState([...foodsJson]);
  console.log('Foods: ', foods);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
