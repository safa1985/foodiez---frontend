import React from "react";
import { useParams } from "react-router-dom";
import { getOneRecipe } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";

const Recipe = () => {
  const { recipeId } = useParams();

  const { data: recipe, isLoading } = useQuery({
    queryKey: ["details", recipeId],
    queryFn: () => getOneRecipe(recipeId),
  });

  if (isLoading) return <h1 className="text-white">Loading...</h1>;

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="object-cover rounded-lg shadow-lg w-full h-64 md:w-64 md:h-auto"
            />
          </div>
          <div className="flex-grow text-white">
            <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
            <h2 className="text-2xl font-semibold mb-2">
              Category: {recipe.category}
            </h2>
            <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient._id}>{ingredient.name}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
