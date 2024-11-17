"use client";
import React, { useState } from "react";
import Input from "./sharedComponents/Input";
import { useRouter } from "next/navigation";

const Login = ({}) => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value) => {
    setUsernameneNumber(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const makeTheCall = async (url, body) => {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // This ensures cookies are sent and received
    });

    return response;
  };

  const handleTheSubmit = async (event) => {
    if (!phoneNumber || !password) {
      alert('Don"t leave the input empty');
      return;
    }

    event.preventDefault();

    // debugger

    let url = "http://127.0.0.1:8000/" + "users/login/";
    let body = {
      phoneNumber,
      password: password,
    };

    try {
      let response = await makeTheCall(url, body);

      if (response.ok) {
        const data = await response.json();
        if (data?.success && data?.token) {
          localStorage.setItem("token", `Bearer ${data.token}`);
          router.push("/movies");
        }
      } else {
        alert(data.message);
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
      <button className="bg-orange-600" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
