"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const Outerbody = ({}) => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken?.role === "public") {
      router.push("/New Delhi");
    } else {
      router.push("/admin");
    }
    return;
  }

  const handleOnClick = (user) => {
    router.push(`/${user}/login`);
    return;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <h1 className="text-2xl font-semibold mb-4">Login as</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out"
          onClick={() => {
            handleOnClick("users");
          }}
        >
          User
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 ease-in-out"
          onClick={() => {
            handleOnClick("admin");
          }}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default Outerbody;
