import { useLocation, Navigate } from "react-router-dom";
import { Fragment } from "react";
function RouteGuard({ authenticated, user, element }) {
  console.log("sss");
  const location = useLocation();
  console.log("authenticate", authenticated);
  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" />;
  }
  if (
    authenticated &&
    user?.role !== "instructor" &&
    (location.pathname.includes("instructor") ||
      location.pathname.includes("/auth"))
  ) {
    return <Navigate to="/home" />;
  }
  if (
    authenticated &&
    user?.role === "instructor" &&
    !location.pathname.includes("instructor")
  ) {
    return <Navigate to="/instructor" />;
  }
  return <Fragment>{element}</Fragment>;
}



export default RouteGuard;
