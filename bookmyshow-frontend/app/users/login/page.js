"use client";
import Link from "next/link";
import Login from "../../../components/Login";



export default function LoginPage() {

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <Login 
        user={"public"}
        />
        <p>
          Not Registered?&nbsp;&nbsp;&nbsp;
          <Link href="/users/signup">Sign-Up here</Link>
        </p>
      </div>
    </div>
  );
}
