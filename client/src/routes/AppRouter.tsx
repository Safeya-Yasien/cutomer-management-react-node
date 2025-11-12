import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Home from "@/pages/Home";
import CustomerDetailsPage from "@/pages/CustomerDetails";
import AddCustomerPage from "@/pages/AddCustomer";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "customers/add-customer",
        element: <AddCustomerPage />,
      },
      {
        path: "customers/edit-customer/:id",
        element: <AddCustomerPage />,
      },
      {
        path: "customers/:id",
        element: <CustomerDetailsPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
