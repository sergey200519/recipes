import { useState, useEffect, useMemo } from "react";
import { getAllCategories } from "../lib/api";
import { Preloader } from "../components/ui/Preloader";
import { CategoryList } from "../components/category/CategoryList";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories || []);
      setLoading(false);
    });
  }, []);

  const filteredCatalog = useMemo(() => {
    return catalog.filter((category) =>
      category.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [catalog, searchTerm]);

  return (
    <>
      <input
        type="text"
        placeholder="Поиск по категориям"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-black rounded-md p-2 mb-[20px] w-full"
      />
      {loading ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
    </>
  );
}

