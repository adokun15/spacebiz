import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/checkout", element: <CheckOutPage /> },
        {
          path: "/products",
          children: [
            {
              index: true,
              element: <ProductsPage />,
            },
            {
              path: ":productId",
              element: <SingleProductPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
