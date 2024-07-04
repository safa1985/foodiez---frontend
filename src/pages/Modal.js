import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export const Modal = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-white">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const CategoryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ title: "", image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = new FormData();
    for (const key in formData) {
      submitData.append(key, formData[key]);
    }
    onSubmit(submitData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-medium mb-2"
          htmlFor="title"
        >
          Category Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-medium mb-2"
          htmlFor="image"
        >
          Category Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 text-lg font-medium rounded-md shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
      >
        Submit
      </button>
    </form>
  );
};

export const RecipeForm = ({ categories, ingredients, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    instructions: "",
    category: [],
    ingredients: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (selectedOptions, name) => {
    setFormData({ ...formData, [name]: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((item) => submitData.append(key, item.value));
      } else {
        submitData.append(key, formData[key]);
      }
    }
    onSubmit(submitData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-medium mb-2"
          htmlFor="name"
        >
          Recipe Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-white text-sm font-medium mb-2"
          htmlFor="instructions"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-white text-sm font-medium mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <MultiSelect
          options={categories.map((cat) => ({
            value: cat._id,
            label: cat.title,
          }))}
          value={formData.category}
          onChange={(selected) => handleSelectChange(selected, "category")}
          labelledBy="Select Categories"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-white text-sm font-medium mb-2"
          htmlFor="ingredients"
        >
          Ingredients
        </label>
        <MultiSelect
          options={ingredients.map((ing) => ({
            value: ing._id,
            label: ing.name,
          }))}
          value={formData.ingredients}
          onChange={(selected) => handleSelectChange(selected, "ingredients")}
          labelledBy="Select Ingredients"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-white text-sm font-medium mb-2"
          htmlFor="image"
        >
          Recipe Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 text-lg font-medium rounded-md shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
      >
        Submit
      </button>
    </form>
  );
};
