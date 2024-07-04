import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipes }) => {
  console.log(recipes.image);
  return (
    <Link to={`/recipes/${recipes._id}`}>
      <div>
        <h1>{recipes.name}</h1>
        <img
          src={"http://localhost:8000" + recipes.image}
          alt={`${recipes.name}-image`}
        />
      </div>
    </Link>
  );
};

export default RecipeItem;
