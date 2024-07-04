import React, { useEffect, useState } from "react";
import { Updatep, getProfile } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Profile = () => {
  const queryClient = useQueryClient();
  const [userInfo, setUserInfo] = useState({});

  const { data: profile } = useQuery({
    queryKey: ["getMyInfo"],
    queryFn: getProfile,
  });

  const { mutate } = useMutation({
    mutationKey: ["Updatep"],
    mutationFn: () => Updatep(userInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(["getMyInfo"]);
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  if (!profile) return <div>Loading...</div>;
  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <img
            src={`http://localhost:8000/${profile?.image}`}
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-700 shadow-lg"
            alt="Profile"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          {profile?.username}'s Profile
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Recipes: {profile?.recipes}
        </p>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-gray-300 text-sm font-medium mb-2"
          >
            Profile Image
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
          onClick={mutate}
          type="submit"
          className="mt-2 inline-block rounded bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 text-lg font-medium shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:ring-gray-500"
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default Profile;
