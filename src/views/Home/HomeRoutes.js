import React from "react";

const dashboardRoutes = [
  {
    path: "/home",
    component: React.lazy(() => import("./Container")),
  }
];

export default dashboardRoutes;