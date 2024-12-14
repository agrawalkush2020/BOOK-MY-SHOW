"use client";
import { useState } from "react";
import Login from "../../../components/Login";
import { jwtDecode } from "../../../node_modules/jwt-decode/build/cjs/index";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const token = localStorage.getItem("token");
  const router = useRouter();

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken?.role === "public") {
      router.push("/New Delhi");
    } else {
      router.push("/admin");
    }
    return;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Login Page</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <Login user={"Admin"} />
      </div>
    </div>
  );
}
