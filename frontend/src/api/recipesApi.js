const API_URL = process.env.REACT_APP_API_URL;

// Fetch all recipes or by optional category/subcategory
export const fetchRecipes = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${API_URL}/recipes?${query}`);
  if (!res.ok) throw new Error("Failed to fetch recipes");
  return await res.json();
};

// Fetch single recipe by ID
export const fetchRecipeById = async (id) => {
  const res = await fetch(`${API_URL}/recipes/${id}`);
  if (!res.ok) throw new Error("Recipe not found");
  return await res.json();
};
