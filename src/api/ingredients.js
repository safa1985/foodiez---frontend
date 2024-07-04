import instance from ".";

const getAllIngredients = async () => {
  const res = await instance.get("/api/ingredient");
  return res.data;
};

const createOneIngredient = async (name) => {
  const res = await instance.post("/api/ingredient", {
    name: name,
  });
  return res.data;
};

export { getAllIngredients, createOneIngredient };
