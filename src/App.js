import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CoachProfile from "./components/Profile1";
import CoachProfile2 from "./components/Profile2";
import CoachProfile3 from "./components/Profile3";
import Profile4 from "./components/profile4";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Topcoaches from "./components/Topcoaches";
import Studentdashboard from "./components/Studentdashboard";
import Coachdashboard from "./components/Coachdashboard";
import CourseDetail from "./components/CourseDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <CoachProfile />
              <CoachProfile2 />
              <CoachProfile3 />
              <Profile4 />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/topcoaches" element={<Topcoaches />} />
        <Route path="/courses" element={<Studentdashboard />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/coach-dashboard" element={<Coachdashboard />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
