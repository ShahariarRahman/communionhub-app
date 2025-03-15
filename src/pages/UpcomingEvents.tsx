import { toast } from "react-toastify";

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function UpcomingEvents() {
  return (
    <div>
      <div className="text-[2rem] font-semibold py-7">
        <h2 className="text-black/80">
          We Helped Communities Connect & Flourish
        </h2>
        <h2 className="bg-linear-70 from-[#03b8f5] to-black bg-clip-text text-transparent">
          ✦ Upcoming Events
        </h2>
      </div>
      <div className="text-black/80 my-5">
        {["Religious", "Social", "Charity"].map((type) => (
          <button
            onClick={() => toast("Sorry, feature not added, yet!")}
            className="hover:text-indigo-700 font-semibold hover:border-indigo-700 hover:cursor-pointer px-2.5 py-1.5 rounded-full mr-3 border-[1px] border-black/15 duration-150"
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[...Array.from({ length: 4 })].map((_) => (
          <div className="bg-white shadow-2xl rounded-lg p-4">
            <img
              src="https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1737999482266?_a=BAMCkGfi0"
              alt="Event Image"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-xl font-semibold text-gray-800 mb-2">
              Holi Event
            </div>
            <div className="text-gray-600 mb-2">
              Friday, March 14, 2025 - 10:00 AM IST
            </div>
            <span className="bg-green-300 text-green-800 text-xs px-2 py-1 rounded-full">
              FREE
            </span>
            <div className="mt-4">
              <button
                onClick={() => toast("Sorry, feature not added, yet!")}
                className="bg-blue-500 hover:bg-blue-400 hover:cursor-pointer text-white py-2 px-4 rounded-full w-full duration-150"
              >
                Join Others in this Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
