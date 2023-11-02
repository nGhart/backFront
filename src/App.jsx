import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  SignupPage,
  AccountsPage,
  ErrorPage,
  SummaryPage,
  TransactionPage,
  AddDeposit,
  Dashboard,
  AddWithdrawal,
  Layout,
  DailyReport,
  AdminPage,
  TransAdmin,
  TellerAdmin,
  DeleteTeller,
  UpdateTeller,
  Profile,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <SummaryPage />,
          },
          {
            path: "adddeposit",
            element: <AddDeposit />,
          },

          {
            path: "addwithdrawal",
            element: <AddWithdrawal />,
          },
          {
            path: "accounts",
            element: <AccountsPage />,
          },
          {
            path: "transactions",
            element: <TransactionPage />,
          },
          {
            path: "report",
            element: <DailyReport />,
          },
          { path: "profile", element: <Profile /> },
          {
            path: "admin",
            element: <AdminPage />,
            children: [
              { index: true, element: <TellerAdmin /> },
              {
                path: "register",
                element: <SignupPage />,
              },

              {
                path: "transadmin",
                element: <TransAdmin />,
              },
              ,
              {
                path: "delete",
                element: <DeleteTeller />,
              },
              {
                path: "update",
                element: <UpdateTeller />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;
