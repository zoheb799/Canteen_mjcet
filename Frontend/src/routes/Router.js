import { lazy } from "react";
import { Navigate } from "react-router-dom";


const FullLayout = lazy(() => import("../layouts/FullLayout.js"));



const Starter = lazy(() => import("../views/Starter.js"));



const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));




const ThemeRoutes = [
  {
    path: "/Adminn/Starter",
    element: <FullLayout />,
    children: [
      { path: "/Adminn", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      
    ],
  },
];

export default ThemeRoutes;
