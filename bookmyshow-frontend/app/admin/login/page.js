"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Login from "../../../components/Login";
import { jwtDecode } from "../../../node_modules/jwt-decode/build/cjs/index";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const token = localStorage.getItem("token");
  const router = useRouter();

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken?.role == "public") {
      router.push("/New Delhi");
    } else {
      router.push("/admin");
    }
    return;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <Login user={"Admin"} />
      </div>
    </div>
  );
}
