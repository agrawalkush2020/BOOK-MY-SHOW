"use client";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store/store";

const handleLogout = () => {
  localStorage.removeItem("token");
  alert("You have been logged out.");
  router.push("/login"); 
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className="m-0 p-0">
          {children}
        </body>
      </html>
    </Provider>
  );
}
