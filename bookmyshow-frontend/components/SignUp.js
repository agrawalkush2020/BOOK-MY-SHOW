"use client";
import React, { useState } from "react";
import Input from "./sharedComponents/Input";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handling functions for each input state
  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePhoneNumberChange = (value) => {
    // Keep phone number as a string to avoid issues with leading zeros
    if (value.length <= 10) setPhoneNumber(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  function validateEmail(email) {
    // Regular expression to validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  const makeTheCall = async (url, body) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      alert("Network error occurred. Please try again later.");
    }
  };

  const handleTheSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log(typeof(phoneNumber));
      if (phoneNumber.length !== 10) {
        throw new Error('Please enter a 10 digit "Phone Number"!');
      } else if (password !== confirmPassword) {
        throw new Error("Passwords do not match!");
      } else if (!validateEmail(email)) {
        throw new Error('Please enter a "valid email"!');
      }
    } catch (error) {
      alert(error.message);
      return; // Stop further processing if there's an error
    }

    let url = "http://127.0.0.1:3000/" + "users/signup/";
    let body = {
      username,
      number: Number(phoneNumber),
      email,
      password,
    };

    let response = await makeTheCall(url, body);

    if (response && response.ok) {
      const data = await response.json();
      if (data?.success) {
        router.push("/users/login");
      } else {
        alert(data?.message);
      }
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Sign Up Page</h1>

        <form onSubmit={handleTheSubmit}>
          <Input
            name={"phoneNumber"}
            type={"tel"}
            label={"Phone Number:"}
            value={phoneNumber}
            placeHolder={"Enter your phone number"}
            handleChange={handlePhoneNumberChange}
          />
          <Input
            name={"email"}
            type={"email"}
            label={"Email Address:"}
            value={email}
            placeHolder={"Enter your email address"}
            handleChange={handleEmailChange}
          />
          <Input
            name={"username"}
            type={"text"}
            label={"Username:"}
            value={username}
            placeHolder={"Enter your Username"}
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
          <Input
            name={"confirmPassword"}
            type={"password"}
            label={"Confirm Password:"}
            value={confirmPassword}
            placeHolder={"Confirm your password"}
            handleChange={handleConfirmPasswordChange}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mt-4 w-full"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
