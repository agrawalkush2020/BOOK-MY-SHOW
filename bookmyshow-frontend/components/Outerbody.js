"use client";
import React, { useEffect } from "react";
import SignUp from "./SignUp";

import Login from "./Login";
import FirstPage from "./FirstPage";
import Input from "./sharedComponents/Input";
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
    null
  );
};

export default Outerbody;
