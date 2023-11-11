import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/about/About";
import AboutApp from "./pages/about/AboutApp";
import AboutDeveloper from "./pages/about/AboutDeveloper";
import SignUp, { action as signinAction } from "./pages/SignUp";
import RegisteredUser from "./pages/RegisteredUser";
import Login from "./pages/Login";
import LoginFeature from "./pages/LoginFeature";
import TodosLogic from "./components/TodosLogic";
import RequireAuth from "./pages/RequireAuth";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="logic" element={<TodosLogic />} />
        <Route path="about" element={<About />}>
          <Route path="about-app" element={<AboutApp />} />
          <Route path="about-developer" element={<AboutDeveloper />} />
        </Route>
        <Route path="sign-in" element={<SignUp />} action={signinAction} />
        <Route path="registeredUser/:user" element={<RegisteredUser />} />
        <Route path="login" element={<Login />} />
        <Route
          path="login-feature"
          element={<LoginFeature />}
          loader={async () => {
            return <RequireAuth allowedRoles={ROLES.User} />;
          }}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
