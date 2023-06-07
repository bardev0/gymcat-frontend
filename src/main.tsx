import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import UserHomePage from "./routes/UserHomePage";
import ResetPassword from "./routes/ResetPassword";

import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";

const router = createBrowserRouter([
  { path: "gymcat/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/home", element: <UserHomePage /> },
  { path: "/resetPassword", element: <ResetPassword /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
		<RouterProvider router={router} fallbackElement={<LandingPage />}></RouterProvider>
  </React.StrictMode>
);
