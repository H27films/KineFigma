import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Dashboard from "./components/Dashboard";
import LogWeights from "./components/LogWeights";
import LogCardio from "./components/LogCardio";
import LogCalories from "./components/LogCalories";
import Profile from "./components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "weights", Component: LogWeights },
      { path: "cardio", Component: LogCardio },
      { path: "calories", Component: LogCalories },
      { path: "profile", Component: Profile },
    ],
  },
]);
