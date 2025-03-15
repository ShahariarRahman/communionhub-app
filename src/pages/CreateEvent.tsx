/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { toast } from "react-toastify";

const categories = ["All", "Religious", "Social", "Charity"];

export default function CreateEvent() {
  const [events, setEvents] = useState([
    {
      title: "Community Prayer Gathering",
      date: "March 20, 2025",
      category: "Religious",
      location: "Central Park, NY",
      description: "Join us for an evening of prayer, reflection, and unity.",
    },
    {
      title: "Charity Fundraiser Gala",
      date: "March 25, 2025",
      category: "Charity",
      location: "Grand Hall, LA",
      description:
        "A night of giving back to the community with special performances.",
    },
    {
      title: "Youth Leadership Workshop",
      date: "March 30, 2025",
      category: "Social",
      location: "City Library, SF",
      description: "Empowering the next generation of community leaders.",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    category: "",
    location: "",
    description: "",
  });

  // Handle input changes
  const handleInputChange = (e: any) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Handle adding new event
  const handleAddEvent = (e: any) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.category) {
      setEvents([...events, newEvent]);
      setNewEvent({
        title: "",
        date: "",
        category: "",
        location: "",
        description: "",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <form
        onSubmit={handleAddEvent}
        className="mt-6 w-full max-w-4xl bg-white shadow-2xl p-8 rounded-xl border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Add New Event
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              value={newEvent.title}
              onChange={handleInputChange}
              className="w-full p-3 mt-1 border border-gray-400 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              className="w-full p-3 mt-1 border border-gray-400 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Category</label>
            <select
              name="category"
              value={newEvent.category}
              onChange={handleInputChange}
              className="w-full p-3 mt-1 border border-gray-400 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none"
            >
              <option value="">Select Category</option>
              {categories.slice(1).map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter event location"
              value={newEvent.location}
              onChange={handleInputChange}
              className="w-full p-3 mt-1 border border-gray-400 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter event description"
              value={newEvent.description}
              onChange={handleInputChange}
              className="w-full p-3 mt-1 border border-gray-400 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none h-32"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              onClick={() => toast("Sorry, feature not added, yet!")}
              className="py-2 px-3 hover:cursor-pointer bg-black/80 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Add Event
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
