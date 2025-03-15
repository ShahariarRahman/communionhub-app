import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: (
      <Link
        to="/upcoming-events"
        className="text-black/80 hover:!text-blue-500 text-lg"
      >
        Upcoming Events
      </Link>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/create-event"
        className="text-black/80 hover:!text-blue-500 text-lg"
      >
        Create Event
      </Link>
    ),
    key: "1",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img
            src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
            alt="Communion Logo"
            className="h-8"
          />
        </div>
        <nav className="hidden md:flex space-x-6 lg:space-x-10 text-lg font-semibold items-center">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a
              className="hover:text-blue-500 hover:cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                <span>Events&ensp;›</span>
              </Space>
            </a>
          </Dropdown>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
        </nav>
        <button
          onClick={() => toast("Sorry, feature not added, yet!")}
          className="hidden md:block hover:bg-blue-700 bg-black/80 text-base font-semibold text-white px-6 py-2 rounded-full whitespace-nowrap hover:cursor-pointer"
        >
          Sign in
        </button>
        <button
          className="md:hidden text-2xl text-black/80"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a
              className="hover:text-blue-500 hover:cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                <span>Events&ensp;›</span>
              </Space>
            </a>
          </Dropdown>
          <Link
            to="/about"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <button
            onClick={() => {
              toast("Sorry, feature not added, yet!");
              setIsMenuOpen(false);
            }}
            className="hover:bg-blue-700 duration-200 bg-black/80 text-base font-semibold text-white px-6 py-2 rounded-full whitespace-nowrap"
          >
            Sign in
          </button>
        </div>
      )}
    </header>
  );
}
