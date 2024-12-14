"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const Outerbody = ({}) => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken?.role == "public") {
      router.push("/users/login");
    } else {
      router.push("/admin/login");
    }
    return;
  }

  const handleOnClick = (user) => {
    router.push(`/${user}/login`);
    return ;
  };

  return (
    <div>
      Login as
      <div className="flex">
        <button
          className="border border-blue-500 m-[10px]"
          onClick={() => {
            handleOnClick("users");
          }}
        >
          User
        </button>
        <button
          className="border border-blue-500 m-[10px]"
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
