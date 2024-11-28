"use client";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token");
    alert("You have been logged out.");
    router.push("/users/login");
  };

  return (
    <>
      <header>
        <nav>
          {/* Other navigation links */}
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
