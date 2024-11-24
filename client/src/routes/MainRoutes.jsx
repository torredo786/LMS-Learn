import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth";
import RouteGuard from "../components/route-guard";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import InstructorDashboardPage from "../pages/instructor";
import StudentHomePage from "../pages/student/home";
import NotFoundPage from "../pages/not-found";
import AboutPage from "../containers/components/AboutPage";
import HelpPage from "../containers/components/HelpPage";
import ProfilePage from "@/containers/components/ProfilePage";


const MainRoutes = () => {
  const { auth } = useContext(AuthContext);
  return (
    
    <Routes>
        <Route
          path="/auth"
          element={
            <RouteGuard
              element={<AuthPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor"
          element={
            <RouteGuard
              element={<InstructorDashboardPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/"
          element={
            <RouteGuard
              element={<StudentHomePage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        >
          <Route
            path="home"
            element={<StudentHomePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
          <Route
            path="/"
            element={<StudentHomePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route
          path="/about"
          element={
            <RouteGuard
              element={<AboutPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/help"
          element={
            <RouteGuard
              element={<HelpPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <RouteGuard
              element={<ProfilePage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
      </Routes>
  )
}

export default MainRoutes