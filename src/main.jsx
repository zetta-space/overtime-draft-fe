import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./state/UserContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./screens/Dashboard.jsx";
import Error from "./screens/Error.jsx";
import Employee from "./screens/Employee.jsx";
import Root from "./routes/Root.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Root />,
    children: [
      {
        path: "index",
        element: <Dashboard />,
      },
      {
        path: "employee/:employeeId",
        element: <Employee />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </UserProvider>
);
