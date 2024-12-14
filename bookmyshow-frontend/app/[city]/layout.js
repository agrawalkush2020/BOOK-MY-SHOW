"use client";
import { useRouter } from "next/navigation";
import "../../styles/globals.css";

export default function RootLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token");
    alert("You have been logged out.");
    router.push("/users/login");
  };

  const routerToHome = () => {
    router.push("/New Delhi");
  };

  return (
    <>
      <header>
        <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
          <div
            className="text-3xl font-extrabold text-white tracking-wide cursor-pointer hover:text-yellow-300 transition duration-200 ease-in-out"
            onClick={routerToHome}
          >
            Movie Dekho
          </div>
          <div className="flex space-x-8">
            <div
              className="text-xl font-semibold text-white tracking-wide cursor-pointer hover:text-yellow-300 transition duration-200 ease-in-out"
              onClick={routerToHome}
            >
              Movies
            </div>
            <div
              className="text-xl font-semibold text-white tracking-wide cursor-pointer hover:text-yellow-300 transition duration-200 ease-in-out"
              onClick={() => router.push("/about")}
            >
              About
            </div>
            <div
              className="text-xl font-semibold text-white tracking-wide cursor-pointer hover:text-yellow-300 transition duration-200 ease-in-out"
              onClick={() => router.push("/contact")}
            >
              Contact
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-yellow-500 hover:bg-yellow-400 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105"
          >
            Logout
          </button>
        </nav>
      </header>

      <main className="min-h-screen bg-gray-100 p-6">{children}</main>
    </>
  );
}
