import instance from ".";


const getAllCategories = async () => {
  const { data } = await instance.get("/api/category/");
  console.log(data);
  return data;
};

const fetchCategories = async () => {
  const { data } = await instance.get("/api/categories");
  return data;
};

const fetchRecipes = async () => {
  const { data } = await instance.get("/api/recipes");
  return data;
};

const fetchIngredients = async () => {
  const { data } = await instance.get("/api/ingredients");
  return data;
};

const createCategory = async (formData) => {
  const { data } = await instance.post("/api/categories", formData);
  return data;
};

const createRecipe = async (formData) => {
  const { data } = await instance.post("/api/recipes", formData);
  return data;
};

export {
  fetchCategories,
  fetchIngredients,
  fetchRecipes,
  createCategory,
  createRecipe,
  getAllCategories
};

