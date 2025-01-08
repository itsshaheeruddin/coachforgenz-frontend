import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState();
  const [courses, setCourses] = useState([]);
  console.log(user)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://coachforgenz.up.railway.app/getcourses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedUserType = localStorage.getItem("userType");

    if (storedUser && storedUserType) {
      setUser(JSON.parse(storedUser));
      setUserType(storedUserType);
      if (storedUserType === "student") {
        navigate("/courses");
      } else if (storedUserType === "instructor") {
        navigate("/coach-dashboard");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    setUser(null);
    setUserType(null);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        userType,
        setUserType,
        handleLogout,
        courses,
        setCourses,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
