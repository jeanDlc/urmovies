import CategoriesClientPage from "./CategoriesClientPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URmovies | Categories",
};

const Categories = () => {
  return <CategoriesClientPage />;
};

export default Categories;
