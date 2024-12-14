"use client";
import React from "react";
import { useRouter } from "../../node_modules/next/navigation";
import { jwtDecode } from "../../node_modules/jwt-decode/build/cjs/index";

const UserLayout = ({ children }) => {

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
    <div>
      {/* Main content area where the login or signup page will be rendered */}
      <main>{children}</main>
    </div>
  );
};

export default UserLayout;
