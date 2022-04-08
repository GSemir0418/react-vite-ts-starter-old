import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("../view/home")),
    name: "Home",
  },
  {
    path: "/home",
    component: lazy(() => import("../view/home")),
    name: "Home",
  },
  {
    path: "/screen",
    component: lazy(() => import("../view/screen2")),
    name: "Screen2",
  },
];
export default routes;
