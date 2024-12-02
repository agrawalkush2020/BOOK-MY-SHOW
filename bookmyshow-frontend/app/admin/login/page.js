"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    function checkCookie() {
      const cookies = document.cookie.split(";");
      const sessionCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("sessionid=")
      );
      setIsAuthenticated(!!sessionCookie);
    }

    checkCookie();
  }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

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
