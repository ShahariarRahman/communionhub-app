import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import UpcomingEvents from "../pages/UpcomingEvents";
import CreateEvent from "../pages/CreateEvent";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/upcoming-events",
        element: <UpcomingEvents />,
      },
      {
        path: "/create-event",
        element: <CreateEvent />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <p>Not Found</p>,
  },
]);

export default routes;
