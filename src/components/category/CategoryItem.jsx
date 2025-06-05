import { Link } from "react-router-dom";

export function CategoryItem({ strCategory, strCategoryThumb, strCategoryDescription }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative">
        <img
          src={strCategoryThumb}
          alt={strCategory}
          className="w-full h-48 object-cover"
        />
        <h2 className="absolute bottom-2 left-2 text-white text-xl font-semibold bg-black/60 px-2 py-1 rounded">
          {strCategory}
        </h2>
      </div>
      <div className="p-4">
        <p className="text-gray-700">
          {strCategoryDescription.slice(0, 60)}...
        </p>
      </div>
      <div className="px-4 pb-4">
        <Link
          to={`/category/${encodeURIComponent(strCategory)}`}
          className="text-teal-600 hover:underline font-medium"
        >
          Watch category
        </Link>
      </div>
    </div>
  );
}
