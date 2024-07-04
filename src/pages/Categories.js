import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState, useContext } from "react";
import { Modal, CategoryForm, RecipeForm } from "./Modal"; // Ensure the path is correct
import UserContext from "../context/UserContext";
import {
  fetchCategories,
  fetchRecipes,
  fetchIngredients,
  createCategory,
  createRecipe,
} from "../api/category";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isRecipeModalVisible, setRecipeModalVisible] = useState(false);
  const queryClient = useQueryClient();

  const { data: categories = [], isLoading: isLoadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: recipes = [], isLoading: isLoadingRecipes } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  const { data: ingredients = [], isLoading: isLoadingIngredients } = useQuery({
    queryKey: ["ingredients"],
    queryFn: fetchIngredients,
  });

  const categoryMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
    },
  });

  const recipeMutation = useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries("recipes");
    },
  });

  const [user, setUser] = useContext(UserContext);

  if (isLoadingCategories || isLoadingRecipes) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  const filteredRecipes = selectedCategory
    ? recipes.filter((recipe) => recipe.category.includes(selectedCategory))
    : recipes;

  const handleCategorySubmit = (formData) => {
    categoryMutation.mutate(formData);
    setCategoryModalVisible(false);
  };

  const handleRecipeSubmit = (formData) => {
    recipeMutation.mutate(formData);
    setRecipeModalVisible(false);
  };

  return (
    <div className="container min-w-full p-8 px-20 min-h-screen bg-gray-900">
      {/* Top Image */}
      <div className="mb-8">
        <img
          src="https://img.freepik.com/premium-photo/table-full-food-including-nuts-fruits-nuts-nuts_879145-520.jpg" // Add your image link here
          alt="Top Banner"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Headline */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          Explore Our Culinary World
        </h1>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Discover a variety of delicious recipes, explore different food
          categories, and create your own culinary masterpieces.
        </p>
      </div>

      {/* Categories Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Categories
        </h2>
        {user && (
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            onClick={() => setCategoryModalVisible(true)}
          >
            Create New Category
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setSelectedCategory("")}
            className="mb-4 transform hover:scale-105 transition duration-300"
          >
            <img
              className="h-48 w-48 rounded-full object-cover border-4 border-gray-700 shadow-lg"
              src="https://img.freepik.com/premium-photo/table-full-food-including-nuts-fruits-nuts-nuts_879145-520.jpg"
              alt="All Categories"
            />
          </button>
          <div className="text-lg font-semibold text-white">All</div>
        </div>
        {categories.map((category) => (
          <div key={category._id} className="flex flex-col items-center">
            <button
              onClick={() => setSelectedCategory(category.title)}
              className="mb-4 transform hover:scale-105 transition duration-300"
            >
              <img
                className="h-48 w-48 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                src={"http://localhost:8000/" + category.image}
                alt={category.title}
              />
            </button>
            <div className="text-lg font-semibold text-white">
              {category.title}
            </div>
          </div>
        ))}
      </div>

      {/* Recipes Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Recipes
        </h2>
        {user && (
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            onClick={() => setRecipeModalVisible(true)}
          >
            Create New Recipe
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredRecipes.map((recipe) => (
          <div key={recipe._id} className="flex flex-col items-center">
            <img
              className="h-48 w-48 rounded-lg object-cover border-4 border-gray-700 shadow-lg transform hover:scale-105 transition duration-300"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="mt-2 text-lg font-semibold text-white">
              {recipe.title}
            </div>
          </div>
        ))}
      </div>

      {/* Category Modal */}
      <Modal
        isVisible={isCategoryModalVisible}
        onClose={() => setCategoryModalVisible(false)}
        title="Create New Category"
      >
        <CategoryForm onSubmit={handleCategorySubmit} />
      </Modal>

      {/* Recipe Modal */}
      <Modal
        isVisible={isRecipeModalVisible}
        onClose={() => setRecipeModalVisible(false)}
        title="Create New Recipe"
      >
        <RecipeForm
          categories={categories}
          ingredients={ingredients}
          onSubmit={handleRecipeSubmit}
        />
      </Modal>
    </div>
  );
};

export default Categories;
