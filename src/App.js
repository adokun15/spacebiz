import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./Pages/RootPage";
//import LandingPage from "./Pages/landingPage";
import Authentication from "./components/auth";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import SellerHome from "./Pages/Dashboard/home";
import AccountComponent from "./Pages/Dashboard/account";
import OrdersComponent from "./Pages/Dashboard/Orders";
import CustomersComponent from "./Pages/Dashboard/Customers";
import MembershipComponent from "./Pages/Dashboard/memberShip";
import ProductComponent from "./Pages/Dashboard/products";
import SettingsComponent from "./Pages/Dashboard/settings";
import StoreLayout from "./Pages/Store/StoreLayout";
import MarketPlace from "./Pages/Store/ProductStore";
import ProductStoreDetail from "./Pages/Store/ProductDetails";
import Cart from "./Pages/Store/Carts";
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
