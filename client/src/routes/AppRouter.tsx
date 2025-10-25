import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@layouts/MainLayout";
import AddCustomerForm from "@/pages/AddCustomerForm";
import Home from "@/pages/Home";
import CustomerDetailsPage from "@/pages/CustomerDetails";

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
        path: "add-customer",
        element: <AddCustomerForm />,
      },
      {
        path: "customers/:id",
        element: <CustomerDetailsPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
