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
  console.log(profile);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="flex justify-center">
          <img
            src={`https://react-bank-project.eapi.joincoded.com/${profile?.image}`}
            className=" flex flex-col items-center justify-center w-24 h-24 rounded-full mb-4"
          />
        </div>

        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          {profile?.username}'s Profile
        </h1>
        <p className="text-lg text-gray-600">Balance: {profile?.balance}</p>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-white text-sm font-medium mb-2"
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
          className="mt-2 inline-block rounded bg-sky-600 px-5 py-2 text-lg font-medium text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300"          >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
