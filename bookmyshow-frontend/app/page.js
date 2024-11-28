import { decodeAction } from "next/dist/server/app-render/entry-base";
import React, { useEffect } from "react";
import Outerbody from "../components/Outerbody";
import "../styles/globals.css";


const GroupsPage = ({ groups = [], username }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      alert("Already logged in !!");
      router.push("/users/login");
      return;
    }

  }, []);

  return <Outerbody />;
};

export default GroupsPage;
