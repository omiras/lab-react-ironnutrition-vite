import { useState } from "react";
import { Row } from "antd";

import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

export default function FoodList() {
    // Create a state variable within the App component and store the foods array in it.
    const [foods, setFoods] = useState([...foodsJson]);
    const [search, setSearch] = useState('');

    const handleDelete = (id) => {
        console.log('Queremos borrar el id ' + id);

        //1. Aplicar correctamente el método filter
        const filteredFoods = foods.filter(f => f.id !== id);

        //2. Actualizar la variable de estado
        setFoods(filteredFoods)
    }

    // creo una función y mi hijo me tiene que pasar un objeto con la nueva comida
    const handleCreateFood = (createdFoodFromChild) => {
        console.log('Nueva comida:', createdFoodFromChild);
        // actualizar el array de foods con la nueva comida (actualizar un array con un nuevo objeto)
        setFoods([createdFoodFromChild, ...foods]);
    }

    const handleFilter = (e) => {
        // Cada vez que se ejecuta esta función, es que ha cambiado el valor del input search
        const keyword = e.target.value;
        setSearch(keyword);
    }

    // filtrar el array de foods con keywords
    const filteredFoods = foods.filter(f => new RegExp(search, 'i').test(f.name));

    return <>
        <h2>Add New Food</h2>
        <AddFoodForm onCreateFood={handleCreateFood} />
        {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
        <h2>Filter Food</h2>
        <Search value={search} onSearchChange={handleFilter} />

        <h2>List of Foods</h2>
        <Row style={{
            justifyContent: "center"
        }}>
            {filteredFoods.map(f => <FoodBox key={f.id} food={f} onDelete={handleDelete} />)}
        </Row>
    </>
}