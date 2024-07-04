import instance from ".";

const getAllCategories = async () => {
  const { data } = await instance.get("/api/category/");
  console.log(data);
  return data;
};

export { getAllCategories };
