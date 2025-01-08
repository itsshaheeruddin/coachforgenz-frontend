import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Profile() {
  const { user, setUser } = useContext(AppContext);
  const [name, setName] = useState(user?.name);
  const [email] = useState(user?.email);  // No need for setter, email is not editable
  const [username] = useState(user?.username);  // No need for setter, username is not editable

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch("https://coachforgenz.up.railway.app/updateInstructor", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),  // Only sending name and email
      });

      const data = await response.json();

      if (response.ok) {
        alert("Instructor name updated successfully");
        setUser(data.instructor);
        localStorage.setItem("user", JSON.stringify(data.instructor));
      } else {
        alert(data.message || "Failed to update instructor");
      }
    } catch (error) {
      console.error("Error updating instructor:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg mt-2"
            placeholder="Enter your name"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-gray-700" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            disabled
            className="w-full p-2 border rounded-lg mt-2"
            placeholder="Enter your username"
          />
        </div>

        {/* Email (disabled, can't edit) */}
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            disabled
            className="w-full p-2 border rounded-lg mt-2 bg-gray-100"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full p-3 rounded-lg mt-4 bg-green-500 hover:bg-green-600 text-white"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;
