"use client";
import Link from "next/link";
import Login from "../../../components/Login";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Login Page</h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <Login user={"public"} />
        <p className="text-center mt-4 text-sm text-gray-600">
          Not Registered?&nbsp;&nbsp;&nbsp;
          <Link
            href="/users/signup"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Sign-Up here
          </Link>
        </p>
      </div>
    </div>
  );
}
