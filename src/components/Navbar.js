import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import logo from "../components/images/Frame 229.png";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, userType, setUser, handleLogout } = useContext(AppContext);

  const handleScrollToTopCoaches = (event) => {
    event.preventDefault();
    navigate("/");
    const element = document.getElementById("top-coaches");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavigation = () => {
    if (user) {
      handleLogout();
      navigate("/");
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      {userType !== "instructor" && (
        <header className="flex justify-between items-center px-4 sm:px-10 py-4 sm:py-6">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-20 sm:w-24 h-8 sm:h-10" />
          </Link>
          <nav className="flex space-x-3 sm:space-x-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-pink-500 text-sm sm:text-base"
            >
              Home
            </Link>
            {/* Use onClick to trigger scroll */}
            <Link
              to="/#top-coaches"
              onClick={handleScrollToTopCoaches}
              className="text-gray-800 hover:text-pink-500 text-sm sm:text-base"
            >
              Top Coaches
            </Link>
            {user && userType === "student" && (
              <Link
                to="/courses"
                className="text-gray-800 hover:text-pink-500 text-sm sm:text-base"
              >
                Courses
              </Link>
            )}
            <button
              onClick={() => {
                handleNavigation();
              }}
              className="text-pink-500 hover:text-pink-700 font-semibold text-sm sm:text-base"
            >
              {/* condition ? expression_if_true : expression_if_false; */}
              {user ? "Log Out" : "Sign Up"} 
            </button>
          </nav>
        </header>
      )}
    </>
  );
}
