import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFilteredCategory } from '../lib/api'
import { MealList } from '../components/meal/MealList'
import { Preloader } from '../components/ui/Preloader'

export default function Category() {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await getFilteredCategory(id);
        setMeals(data?.meals || []);
      } catch (error) {
        console.error("Ошибка загрузки категорий:", error);
        setMeals([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
  }, [id]);

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500 hover:underline block mb-4">
        Go Back
      </Link>

      {loading ? <Preloader /> : <MealList meals={meals} />}
    </div>
  );
}
