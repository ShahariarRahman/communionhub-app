import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayout.tsx", [
    index("./pages/Home.jsx"),
    route("/events", "./pages/Events.jsx"),
  ]),
] satisfies RouteConfig;
