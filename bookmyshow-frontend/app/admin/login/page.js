"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Login from "../../../components/Login";

export default function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <Login 
          user={"Admin"} 
        />
      </div>
    </div>
  );
}
