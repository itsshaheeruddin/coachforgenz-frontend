import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

function Uploadcourse() {
  const { user, setCourses, setUser } = useContext(AppContext);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseVideo, setCourseVideo] = useState(null);
  const [courseImage, setCourseImage] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const handleVideoChange = (event) => {
    setCourseVideo(event.target.files[0]);
  };

  const handleImageChange = (event) => {
    setCourseImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlertMessage("");

    if (!courseTitle || !courseDescription || !courseVideo || !courseImage) {
      setAlertMessage("Please fill in all the fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", courseTitle);
    formData.append("description", courseDescription);
    formData.append("image", courseImage);
    formData.append("video", courseVideo);
    formData.append("instructorId", user._id);
    formData.append("username", user.username);

    try {
      const response = await fetch("https://coachforgenz.up.railway.app/uploadCourse", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.updatedInstructor);
        setCourses(data.courses);
        console.log(data);
        setAlertMessage("Course uploaded successfully!");
      } else {
        const error = await response.json();
        setAlertMessage(error.message || "Failed to upload course.");
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("An error occurred. Please try again.");
    } finally {
      setCourseTitle("");
      setCourseDescription("");
      setCourseVideo(null);
      setCourseImage(null);
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-pink-500">
          Upload a Course Content
        </h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            {alertMessage && (
              <div className="mt-2 text-red-600">{alertMessage}</div>
            )}
            <label className="block text-gray-700" htmlFor="courseTitle">
              Title
            </label>
            <input
              type="text"
              id="courseTitle"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
              placeholder="Enter course title"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="courseDescription">
              Description
            </label>
            <textarea
              id="courseDescription"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
              rows="4"
              placeholder="Enter course description"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="courseImage">
              Select Image
            </label>
            <input
              type="file"
              id="courseImage"
              onChange={handleImageChange}
              className="w-full p-2 border rounded-lg mt-2"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="courseVideo">
              Select Video
            </label>
            <input
              type="file"
              id="courseVideo"
              onChange={handleVideoChange}
              className="w-full p-2 border rounded-lg mt-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-lg mt-4 hover:bg-pink-600"
          >
            Upload Course
          </button>
        </form>
      </div>
    </>
  );
}

export default Uploadcourse;
