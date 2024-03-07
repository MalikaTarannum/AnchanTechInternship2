import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./pages/Support/Support";
import Transactions from "./pages/Transactions/Transactions";
import Signup from "./pages/Auth/signup/Signup";
import Signin from "./pages/Auth/signin/Signin";
import RegisterEmailVerify from './pages/Auth/RegisterEmailVerify/RegisterEmailVerify';
import RegisterSuccess from './pages/Auth/RegisterSuccess/RegisterSuccess';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ForgotPasswordSent from './pages/Auth/ForgotPasswordSent/ForgotPasswordSent';
import ResetPasswordSuccess from './pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Transactions",
    element: <Transactions />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/RegisterEmailVerify",
    element: <RegisterEmailVerify />,
  },
  {
    path: "/RegisterSuccess",
    element: <RegisterSuccess />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ForgotPasswordSent",
    element: <ForgotPasswordSent />,
  },
  {
    path: "/ResetPasswordSuccess",
    element: <ResetPasswordSuccess />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
