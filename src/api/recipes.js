import instance from ".";

const getAllRecipes = async () => {
  const res = await instance.get("/api/recipes");
  return res.data;
};

const getOneRecipe = async (id) => {
  const res = await instance.get(`/api/recipes/${id}`);
  return res.data;
};

const createNewRecipe = async (recipe) => {
  const formData = new FormData();

  for (let key in recipe) {
    formData.append(key, recipe[key]);
  }
  const res = await instance.post("/api/recipes", formData);
  return res.data;
};

const deleteOneRecipe = async (id) => {
  const res = await instance.delete(`/api/recipes/${id}`);
  return res.data;
};

export { getAllRecipes, getOneRecipe, createNewRecipe, deleteOneRecipe };
