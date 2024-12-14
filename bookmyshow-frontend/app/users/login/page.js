"use client";
import Link from "next/link";
import Login from "../../../components/Login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Home Button */}
      <div className="w-full flex justify-start p-4">
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Home
        </button>
      </div>

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
