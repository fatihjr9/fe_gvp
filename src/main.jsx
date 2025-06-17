import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "@/routes/route";
import { Toaster } from "react-hot-toast"; 
import "@/index.css";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={router} />
  </>
);
