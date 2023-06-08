import { useState } from "react";
import "./App.css";

import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {

  // Create a state variable within the App component and store the foods array in it.
  const [foods, setFoods] = useState([...foodsJson]);
  console.log('Foods: ', foods);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://cdn2.thecatapi.com/images/MTUxMTkxNg.jpg",
        servings: 1
      }}
      />
    </div>
  );
}

export default App;
