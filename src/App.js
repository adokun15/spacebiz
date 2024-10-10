import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
//import LandingPage from "./pages/landingPage";
import Authentication from "./components/auth";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import SellerHome from "./pages/Dashboard/home";
import AccountComponent from "./pages/Dashboard/account";
import OrdersComponent from "./pages/Dashboard/Orders";
import CustomersComponent from "./pages/Dashboard/Customers";
import MembershipComponent from "./pages/Dashboard/memberShip";
import ProductComponent from "./pages/Dashboard/products";
import SettingsComponent from "./pages/Dashboard/settings";
import StoreLayout from "./pages/Store/StoreLayout";
import MarketPlace from "./pages/Store/ProductStore";
import ProductStoreDetail from "./pages/Store/ProductDetails";
import Cart from "./pages/Store/Carts";
import ProductDetail from "./components/productDetail";
import CustomerDetail from "./components/CustomerDetail";
import TransactionDetail from "./components/TransactionDetail";
import OrderDetail from "./components/OrderDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <Authentication /> },
        { path: "pricing" },
        {
          path: "/dashboard", //Your Profile, display Whatapp Number, Paid plan, Analytics on how made ou made in a week or month
          element: <DashboardLayout />,
          children: [
            { index: true, element: <SellerHome /> },
            { path: "transaction", element: <TransactionDetail /> }, //Provide Transaction List,
            {
              path: "orders",
              children: [
                {
                  index: true,
                  element: <OrdersComponent />,
                },
                {
                  path: ":order-id",
                  element: <OrderDetail />,
                },
              ],
            }, //Customer List;, send out template messages,
            {
              path: "customers",
              children: [
                {
                  index: true,
                  element: <CustomersComponent />,
                },
                {
                  path: ":customer-id",
                  element: <CustomerDetail />,
                },
              ],
            },
            { path: "account", element: <AccountComponent /> }, // Add subAccount;
            { path: "membership", element: <MembershipComponent /> }, //Cancel Membership, manage Subscription;
            {
              path: "products",
              children: [
                {
                  index: true,
                  element: <ProductComponent />,
                },
                {
                  path: ":inventory-id",
                  element: <ProductDetail />,
                },
              ],
            }, //Manage Inventory;
            { path: "settings", element: <SettingsComponent /> }, //Manage all Settings;
          ],
        },
        {
          path: "/:store-slug", //list product
          element: <StoreLayout />,
          children: [
            { index: true, element: <MarketPlace /> },
            { path: ":product-details", element: <ProductStoreDetail /> }, //product detail
            { path: "cart", element: <Cart /> }, //product detail
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
