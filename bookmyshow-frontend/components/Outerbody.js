"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Outerbody = ({}) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("New Delhi");
      setIsLogin;
      return;
    } else {
      // router.push("/users/login");
      setIsLogin(false);
      return;
    }
  }, []);

  if (isLogin == null) return <h1>loading</h1>;

  return (
    <div>
      Login as
      <div className="flex">
        <button className="border border-blue-500 m-[10px]">User</button>
        <button className="border border-blue-500 m-[10px]">Admin</button>
      </div>
    </div>
  );
};

export default Outerbody;
