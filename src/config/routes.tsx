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
    path: "/page1",
    component: lazy(() => import("../view/page1")),
    name: "Page1",
  },
  {
    path: "/page2",
    component: lazy(() => import("../view/page2")),
    name: "Page2",
  },
  {
    path: "/page3",
    component: lazy(() => import("../view/page3")),
    name: "Page3",
  },
  {
    path: "/page4",
    component: lazy(() => import("../view/page4")),
    name: "Page4",
  },
];
export default routes;
