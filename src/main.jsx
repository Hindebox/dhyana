import * as React from "react";
import { Helmet } from "react-helmet";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import ogImage from "./assets/images/dhyana-og.png";
import store from "./redux/store";
import App from "./App";
import ErrorPage from "./pages/error-page/ErrorPage";
import Login from "./pages/login/Login";
import Meditate from "./pages/meditate/Meditate";
import Blog from "./pages/blog/Blog";
import ForgotPass from "./components/form/forgotPass/ForgotPass";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

//show pages only if user is logged in
const RequireAuth = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Login />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/meditate",
    element: (
      <RequireAuth>
        <Meditate />
      </RequireAuth>
    ),
  },
  {
    path: "/blog",
    element: (
      <RequireAuth>
        <Blog />
      </RequireAuth>
    ),
  },
  {
    path: "/resetPassword",
    element: <ForgotPass />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Helmet>
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
