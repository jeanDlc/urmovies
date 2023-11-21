import { useState, useEffect } from "react";

import type { Category } from "@/types";

const useCategories = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const res = await fetch("/categories/api/all");
        const { categories } = await res.json();

        setCategories(categories as Category[]);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCategorias();
  }, []);
  return { categories, loading, error };
};

export default useCategories;
