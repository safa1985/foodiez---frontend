import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNewRecipe } from "../api/recipes";
import Input from "./Input";
import { MultiSelect } from "react-multi-select-component";
import { getAllIngredients } from "../api/ingredients";
import { getAllCategories } from "../api/category";

const RecipeModal = ({ show, setShowModal }) => {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [images, setImages] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [category, setCategory] = useState([]);

  const [recipe, setRecipe] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setRecipe({ ...recipe, [e.target.name]: e.target.files[0] });
    } else {
      setRecipe({ ...recipe, [e.target.name]: e.target.value });
    }
  };

  // category & ingredients from multi-drop down. if either not there, {createOneIngredient} & {createNewCategory}

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["createNewRecipe"],
    mutationFn: () => createNewRecipe(recipe),
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries(["recipes"]);
    },
  });

  const { data: ingredients } = useQuery({
    queryKey: ["getAllIngredients"],
    queryFn: getAllIngredients,
  });

  const { data: cats } = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: getAllCategories,
  });

  const multiselectOptionsIng = ingredients?.map((ing) => {
    return {
      label: ing.name,
      value: ing._id,
    };
  });
  const multiselectOptionsCat = cats?.map((cat) => {
    return {
      label: cat.name,
      value: cat._id,
    };
  });

  if (!show) return "";
  return (
    <div className="inset-0 fixed  flex justify-center items-center flex-col z-20 overflow-hidden">
      <div className="bg-black absolute z-0 opacity-70 inset-0 "></div>
      <div className="relative z-10 flex flex-col gap-3 border-[3px] border-black rounded-md w-[95%] md:w-[40%] h-[300px] md:h-[60%] bg-white pt-[50px]">
        <button
          className="right-0 top-2 absolute w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-red-400"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>

        <Input name="name" onChange={handleChange} />

        <div className="">
          <h1>Ingredients</h1>
          <MultiSelect
            value={ingredientsList}
            options={multiselectOptionsIng}
            onChange={setIngredientsList}
            labelledBy="Select Your Ingredients"
          />
        </div>

        <div className="">
          <h1>Categories</h1>
          <MultiSelect
            value={category}
            options={multiselectOptionsCat}
            onChange={setCategory}
            labelledBy="Select Your Category"
          />
        </div>

        <Input name="instructions" onChange={handleChange} />

        <div className="flex justify-center">
          <h1>Recipe Images </h1>
          <input name="image" type="file" onChange={handleChange} />
        </div>

        <button
          onClick={() => {
            console.log(recipe);
            console.log("inst", ingredientsList);
            const x = ingredientsList.map((i) => i.value);
            console.log("x", x);
            setRecipe({
              ...recipe,
              ["category"]: category[0].value,
              ["ingredients"]: x,
            });

            mutate();
          }}
          className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RecipeModal;
