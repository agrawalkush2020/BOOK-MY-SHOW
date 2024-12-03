"use client";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store/store";

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
