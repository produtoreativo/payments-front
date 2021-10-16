import React from "react";

const dashboardRoutes = [
  {
    path: "/invoice",
    component: React.lazy(() => import("./Container")),
  }
];

export default dashboardRoutes;