import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

export default function MainLayout() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="flex justify-center">
        <div className="max-w-7xl">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
