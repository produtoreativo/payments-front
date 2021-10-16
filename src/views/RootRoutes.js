import { Redirect } from "react-router-dom";
import HomeRoutes from './Home/HomeRoutes';
import InvoiceRoutes from './Invoice/InvoiceRoutes';

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  }
];

const routes = [
  ...HomeRoutes,
  ...InvoiceRoutes,
  ...redirectRoute,
];

export default routes;