import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import logo from "./images/Frame 229.png"; // Update with your logo

const LoginForm = () => {
  const { setUser, userType, setUserType } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage("");

    try {
      if (!email || !password)
        return setErrorMessage("Please fill out all the fields.");

      // Authenticate Student
      if (userType === "student") {
        console.log("Student");
        const url = `https://coachforgenz.up.railway.app/authenticateStudent?email=${email}&password=${password}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok && data) {
          setUser(data.student);
          setUserType(data.userType);
          localStorage.setItem("user", JSON.stringify(data.student));
          localStorage.setItem("userType", data.userType);
          navigate("/courses");
        }
      } else if (userType === "instructor") {
        const url = `https://coachforgenz.up.railway.app/authenticateInstructor?email=${email}&password=${password}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok && data) {
          setUser(data.instructor);
          setUserType(data.userType);
          localStorage.setItem("user", JSON.stringify(data.instructor));
          localStorage.setItem("userType", data.userType);
          navigate("/coach-dashboard");
        }
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while fetching student data.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center">
          <img className="w-18 h-12" src={logo} alt="Logo" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Sign in to your account
        </h2>
        <p className="text-center text-sm text-gray-600">
          Please enter your Email and password to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your Email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Sign in
            </button>
          </div>
        </form>

        {errorMessage && (
          <div className="mt-4 text-center text-sm text-red-500">
            {errorMessage}
          </div>
        )}

        <p className="text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/signup"
            className="font-medium text-pink-600 hover:text-pink-500"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
