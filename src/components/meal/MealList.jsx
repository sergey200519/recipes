import { MealItem } from "./MealItem";

export function MealList({ meals = []}) {
    
    return (
        <div className="grid grid-cols-6 gap-4">
            {meals.map((meal) => (
                <MealItem key={meal.idMeal} {...meal} />
            ))}
        </div>
    )
}