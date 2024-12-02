"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Login from "../../../components/Login";
import Logout from "../../../components/Logout";

export default function LoginPage() {

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <Login />
        <p>
          Not Registered?&nbsp;&nbsp;&nbsp;
          <Link href="/users/signup">Sign-Up here</Link>
        </p>
      </div>
    </div>
  );
}
