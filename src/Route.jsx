
import Signin from "./pages/auth/Signin";
import ForgotPass from "./pages/auth/ForgotPass";
import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./layout/Layout";
import Error from "./pages/error/Error";
import Users from "./pages/users/Users";
import Category from "./pages/category/Category";
import Subscription from "./pages/subscription/Subscription";
import Settings from "./pages/settings/Settings";
import Feedback from "./pages/feedback/Feedback";
import Earnings from "./pages/earining/Earnings";
import CreateAdmin from "./pages/create admin/CreateAdmin";
import Dashboard from "./pages/dashboard/Dashboard";
import ChangePassword from "./pages/settings/ChangePassword"
import Privacy from "./pages/settings/Privacy";
import TermsAndCondition from "./pages/settings/TermsAndCondition";
import BlockUsers from "./pages/block/BlockUsers";




export const router = createBrowserRouter([
    {
        path: '/signin',
        Component: Signin
    },
    {
        path:'/forgotpass',
        Component: ForgotPass
    },
   {
    path: '/',
    Component: Layout,
    errorElement: Error,
    children: [
        {index: true, element: <Navigate to="/signin" replace /> },
        {path: 'dashboard', Component: Dashboard},
        {path: 'user', Component: Users},
        {path: 'user/block', Component: BlockUsers},
        {path: 'earn', Component: Earnings},
        {path: 'subscription', Component: Subscription},
        {path: 'category', Component: Category},
        {path: 'createadmin', Component:CreateAdmin },
        {path: 'feedback', Component: Feedback},
        {path: 'settings', Component: Settings},
        {path: 'settings/changepass', Component: ChangePassword},
        {path: 'settings/privacy', Component: Privacy},
        {path: 'settings/terms', Component: TermsAndCondition},
        {path: 'settings/about', Component: ChangePassword},
        
    ]
   }
])