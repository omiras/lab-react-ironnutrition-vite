// Your code here

export default function FoodBox({ food, onDelete }) {

    return (<div>
        <p>{food.name}</p>

        <img style={{ width: '200px' }} src={food.image} alt={food.nombre} />

        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>

        <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>

        <button onClick={()=>onDelete(food.id)}>Delete</button>
    </div>);
}