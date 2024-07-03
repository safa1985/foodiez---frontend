import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createNewRecipe } from "../api/recipes";

const RecipeModal = ({ show, setShowModal }) => {


  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["createNewRecipe"],
    mutationFn: () => createNewRecipe(name, instructions, images),
  });

// name
// images
// category ("getAllCategories" select from multi-story, otherwise "createNewCategory" button)
// ingredients ("getAllIngredients" select from multi-story, otherwise "createOneIngredient" button)
// instructions

// note: user needs to be logged in




export default RecipeModal;