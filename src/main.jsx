import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import AddCoffee from "./Components/AddCoffee/AddCoffee.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Components/Providers/AuthProvider.jsx";
import CoffeeCard from "./Components/CoffeeCard/CoffeeCard.jsx";
import UpdateCoffee from "./Components/UpdateCoffee/UpdateCoffee.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/coffeeCard",
        element: <CoffeeCard></CoffeeCard>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/update/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
