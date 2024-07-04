import React, { useState, useSyncExternalStore } from "react";
import RecipeItem from "./RecipeItem";
import RecipeModal from "./RecipeModal";
import { getAllRecipes } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";

const RecipesList = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { data } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });

  const recipeList = data?.map((recipe) => <RecipeItem recipes={recipe} />);

  return (
    <>
      <div>
        <div>
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
          />
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Create New Recipe
          </button>
        </div>
        <div>{recipeList}</div>
      </div>
      <RecipeModal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default RecipesList;
