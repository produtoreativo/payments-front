import { Redirect } from "react-router-dom";
import HomeRoutes from './Home/HomeRoutes';

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  }
];

const routes = [
  ...HomeRoutes,
  ...redirectRoute,
];

export default routes;