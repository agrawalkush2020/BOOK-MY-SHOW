"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Outerbody = ({}) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      alert("Already logged in !!");
      router.push("New Delhi");
      return;
    } else {
      alert("Not logged in !!");
      router.push("/users/login");
      return;
    }
  }, []);

  return (
    <h1>loading</h1>
  );
};

export default Outerbody;
