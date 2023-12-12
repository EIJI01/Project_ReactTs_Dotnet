import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages";
import { Suspense } from "react";
import Fallback from "../hooks/Fallback";
import { lazyLoadWithDelay } from "../utils/lazyload";
import { GuardedRoute } from "../hooks/GuardedRoute";

const LoginPage = lazyLoadWithDelay("../pages", "LoginPage");
const RegisterPage = lazyLoadWithDelay("../pages", "RegisterPage");
const BookingQueue = lazyLoadWithDelay("../pages", "BookingQueue");
const CallingGm = lazyLoadWithDelay("../pages", "CallingGm");
const ScanQrcode = lazyLoadWithDelay("../pages", "ScanQrcode");
const ManageQrScan = lazyLoadWithDelay("../pages", "ManageQrScan");
const ManageQueue = lazyLoadWithDelay("../pages", "ManageQueue");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "member/booking-queue",
        element: (
          <GuardedRoute>
            <Suspense fallback={<Fallback />}>
              <BookingQueue />
            </Suspense>
          </GuardedRoute>
        ),
      },
      {
        path: "member/calling-gm",
        element: (
          <GuardedRoute>
            <Suspense fallback={<Fallback />}>
              <CallingGm />
            </Suspense>
          </GuardedRoute>
        ),
      },
      {
        path: "member/scan-qr",
        element: (
          <GuardedRoute>
            <Suspense fallback={<Fallback />}>
              <ScanQrcode />
            </Suspense>
          </GuardedRoute>
        ),
      },
      {
        path: "gm/manage-qrscan",
        element: (
          <GuardedRoute>
            <Suspense fallback={<Fallback />}>
              <ManageQrScan />
            </Suspense>
          </GuardedRoute>
        ),
      },
      {
        path: "gm/manage-queue",
        element: (
          <GuardedRoute>
            <Suspense fallback={<Fallback />}>
              <ManageQueue />
            </Suspense>
          </GuardedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Fallback />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Fallback />}>
        <RegisterPage />
      </Suspense>
    ),
  },
]);
