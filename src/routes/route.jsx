import DashboardPage from "@/pages/dashboard";
import Login from "@/pages/login";
import { Navigate } from "react-router";
import ProtectedRoute from "@/routes/protectedRoute";

const routes = [
    { path: "/", element: <Navigate to="/auth/login" replace /> },
    {
        path:"/auth/login", element:<Login/>
    },
    {
        path:"/dashboard",
        element: <ProtectedRoute/>,
        children: [
            {path:"index", element:<DashboardPage/>}
        ]
    }
];

export default routes