import { useState } from "react";

import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

export default function FoodList() {
    // Create a state variable within the App component and store the foods array in it.
    const [foods, setFoods] = useState([...foodsJson]);

    const handleDelete = (id) => {
        console.log('Queremos borrar el id ' + id);

        //1. Aplicar correctamente el método filter
        const filteredFoods = foods.filter(f => f.id !== id);

        //2. Actualizar la variable de estado
        setFoods(filteredFoods)
    }

    const handleCreateFood = (createdFood) => {
        console.log('Nueva comida:', createdFood);
        // actualizar el array de foods con la nueva comida (actualizar un array con un nuevo objeto)
        setFoods([createdFood, ...foods]);
    }
    return <>
        <AddFoodForm onCreateFood={handleCreateFood} />
        {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
        {foods.map(f => <FoodBox key={f.id} food={f} onDelete={handleDelete} />)}</>
}