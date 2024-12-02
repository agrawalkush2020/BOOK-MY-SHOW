"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Outerbody = ({}) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("New Delhi");
      return;
    } else {
      router.push("/users/login");
      return;
    }
  }, []);

  return (
    <h1>loading</h1>
  );
};

export default Outerbody;
