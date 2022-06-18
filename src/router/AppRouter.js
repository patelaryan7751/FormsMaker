import { useRoutes } from "raviger";
import Dashbaord from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const routes = {
  "/": () => <Login />,
  "/signup": () => <SignUp />,
  "/dashboard": () => <Dashbaord />,
};

export default function AppRouter() {
  let routeResult = useRoutes(routes);
  return <>{routeResult}</>;
}
