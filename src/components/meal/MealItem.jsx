import { Link } from "react-router-dom";

export function MealItem({ strMeal, strMealThumb, idMeal }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative">
        <img src={strMealThumb} alt={strMeal} className="w-full h-48 object-cover" />
        <h2 className="absolute bottom-2 left-2 text-white text-xl font-semibold bg-black/60 px-2 py-1 rounded">
          {strMeal}
        </h2>
      </div>
      <div className="px-4 pb-4 pt-2">
        <Link
          to={`/recipe/${idMeal}`}
          className="text-teal-600 hover:underline font-medium"
        >
          Watch recipe
        </Link>
      </div>
    </div>
  );
}
