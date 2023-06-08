import { useState } from "react";
import "./App.css";

import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {

  // Create a state variable within the App component and store the foods array in it.
  const [foods, setFoods] = useState([...foodsJson]);

  const handleDelete = (id) => {
    console.log('Queremos borrar el id ' + id);

    //1. Aplicar correctamente el método filter
    const filteredFoods = foods.filter(f => f.id !== id);

    //2. Actualizar la variable de estado
    setFoods(filteredFoods)
  }


  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
      {foods.map(f => <FoodBox key={f.id} food={f} onDelete={handleDelete} />)}

    </div>
  );
}

export default App;
