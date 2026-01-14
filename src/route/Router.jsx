import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Error from "../pages/error/Error";
import Signin from "../pages/auth/Signin";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Otp from "../pages/auth/Otp";
import ResetPassword from "../pages/auth/ResetPassword";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/users/Users";
import Earnings from "../pages/earining/Earnings";
import Subscription from "../pages/subscription/Subscription";
import Settings from "../pages/settings/Settings";
import ChangePassword from "../pages/settings/ChangePassword";
import Privacy from "../pages/settings/Privacy";
import TermsAndCondition from "../pages/settings/TermsAndCondition";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Signin /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "otp", element: <Otp /> },
      { path: "resetpassword", element: <ResetPassword /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <Users />,
      },
      {
        path: "earn",
        element: <Earnings />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      { path: "settings/changepass", element: <ChangePassword/> },
      { path: "settings/privacy", element: <Privacy/> },
      { path: "settings/terms", element: <TermsAndCondition/> },
      { path: "settings/about", element: <ChangePassword/> },
    ],
  },
]);

export default router;
