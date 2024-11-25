"use client";
import React, { useState } from "react";
import Input from "./sharedComponents/Input";
import { useRouter } from "next/navigation";

const Login = ({}) => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleTheSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert('Don"t leave the input empty');
      return;
    }

    try {
      let response = await fetch("http://127.0.0.1:3000/users/login/", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data?.success && data?.token) {
          localStorage.setItem("token", `Bearer ${data.token}`);
          router.push("/movies");
        }
      } else {
        alert(data?.message);
      }
    } catch (error) {
      console.error("Error occurred:", error.message);
      alert(`Error occurred:, ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleTheSubmit}>
      <Input
        name={"username"}
        type={"text"}
        label={"Username:"}
        value={username}
        placeHolder={"Enter your username"}
        handleChange={handleUsernameChange}
      />
      <Input
        name={"password"}
        type={"password"}
        label={"Password:"}
        value={password}
        placeHolder={"Enter your password"}
        handleChange={handlePasswordChange}
      />
      <button className="bg-orange-600 p-[5px]" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
