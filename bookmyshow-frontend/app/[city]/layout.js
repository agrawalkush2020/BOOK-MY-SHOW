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
        <nav
          className="flex justify-between items-center p-4 text-white shadow-lg bg-[#333333]"
        >
          <div className="text-2xl font-bold tracking-wide cursor-pointer" onClick={routerToHome}>
            Movie Dekho
          </div>
          <div
            className="text-xl font-semibold tracking-wide cursor-pointer"
            onClick={routerToHome}
          >
            Movies
          </div>
          <button
            onClick={handleLogout}
            className="bg-[#98788] hover:bg-[#0c0600] text-white font-medium px-4 py-2 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105"
          >
            Logout
          </button>
        </nav>
      </header>

      <main className="min-h-screen bg-gray-100 p-4">{children}</main>
    </>
  );
}
