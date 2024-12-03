"use client";
import React, { useState } from "react";
import Input from "./sharedComponents/Input";
import { useRouter } from "next/navigation";

const Login = ({ user = "" }) => {
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
      const url =
        user == "public"
          ? "http://127.0.0.1:3000/users/login/"
          : "http://127.0.0.1:3000/admin/login/";

      let response = await fetch(url, {
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
          if(user=="public"){
            router.push("/New Delhi");
          }else{
            router.push("/admin");
          }
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
