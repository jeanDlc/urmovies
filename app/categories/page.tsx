import { getCategories } from "@/services";
import CategoriesClientPage from "./CategoriesClientPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URmovies | Categories",
};

const Categories = async () => {
  const categories = await getCategories();

  return <CategoriesClientPage categories={categories} />;
};

export default Categories;
