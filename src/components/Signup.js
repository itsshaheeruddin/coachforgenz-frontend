import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

import {
  AcademicCapIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Alert, Typography } from "@mui/material";
import logo from "./images/Frame 229.png";

const SignUpForm = () => {
  const { setUserType, setUser } = useContext(AppContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [userType2, setUserType2] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (userType2 === "Student") {
      setUserType("student");
    } else if (userType2 === "instructor") {
      setUserType("instructor");
    }
    navigate("/signin");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1 && !userType2) {
      setAlertMessage("Please select your user type.");
    } else if (currentStep === 1 && userType2) {
      setAlertMessage("");
      setCurrentStep((prevStep) => prevStep + 1);
    } else if (currentStep === 2) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setAlertMessage("Please fill out all the fields.");
      } else if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match.");
        setAlertMessage("");
      } else {
        setErrorMessage("");
        setAlertMessage("");
        handleSubmit();
        setIsAccountCreated(true);
      }
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setAlertMessage(""); // Clear any previous alert message
  };

  const handleSubmit = async () => {
    if (userType2 === "student") {
      const response = await fetch("https://coachforgenz.up.railway.app/addStudent", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    } else if (userType2 === "instructor") {
      const response = await fetch("https://coachforgenz.up.railway.app/addInstructor", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    }
    setIsAccountCreated(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="mx-auto h-12 w-18" />
        </div>

        <h2 className="text-2xl font-bold font-public-sans text-center text-gray-800">
          Sign Up
        </h2>

        {/* Display the alert message at the top */}
        {alertMessage && (
          <Alert severity="error" className="mb-4">
            {alertMessage}
          </Alert>
        )}

        {/* Display success message when account is created */}
        {isAccountCreated && (
          <div className="text-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-2" />
            <Typography
              variant="h6"
              className="text-green-600 font-semibold mb-4"
            >
              Account Created Successfully!
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              You can now login and start using your account.
            </Typography>
            <button
              onClick={() => handleNavigate()}
              className="w-full py-2 bg-pink-600 mt-4 text-white rounded-md hover:bg-pink-700"
            >
              Login Now
            </button>
          </div>
        )}

        {!isAccountCreated && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
                  Select User Type
                </h3>
                <div className="flex flex-col gap-6">
                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer ${
                      userType2 === "student"
                        ? "border-pink-500 bg-pink-100"
                        : "border-gray-300"
                    }`}
                    onClick={() => setUserType2("student")}
                  >
                    <AcademicCapIcon className="h-16 w-16 text-pink-600 mb-2" />{" "}
                    <p className="font-semibold text-gray-800">Student</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Learn and grow your skills.
                    </p>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer ${
                      userType2 === "instructor"
                        ? "border-pink-500 bg-pink-100"
                        : "border-gray-300"
                    }`}
                    onClick={() => setUserType2("instructor")}
                  >
                    <UserGroupIcon className="h-16 w-16 text-pink-600 mb-2" />{" "}
                    {/* Updated icon */}
                    <p className="font-semibold text-gray-800">Instructor</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Mentor and guide students.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && userType2 && (
              <div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm mt-1 font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 mt-2 rounded-md"
                    placeholder="Your email address"
                  />
                </div>
                {userType2 === "instructor" && (
                  <div>
                    <label className="block text-sm mt-1 font-medium text-gray-700">
                      User Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full p-2 mt-1 border border-gray-300 mt-2 rounded-md"
                      placeholder="Your email address"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm mt-1 font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Your password"
                  />
                </div>
                <div>
                  <label className="block text-sm mt-1 font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Confirm your password"
                  />
                </div>

                {errorMessage && (
                  <Alert severity="error" className="mt-2">
                    {errorMessage}
                  </Alert>
                )}
              </div>
            )}

            <div className="flex justify-between mt-6">
              {currentStep === 2 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="w-1/4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="w-1/4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 ml-auto"
              >
                {currentStep === 2 ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
