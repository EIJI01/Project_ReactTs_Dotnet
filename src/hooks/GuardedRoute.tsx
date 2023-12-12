import { useEffect, useState } from "react";
import { UseUserContext } from "../contexts/ContextProvider";
import { Role } from "../models/value-type/enum-type";
import { useLocation, useNavigate } from "react-router-dom";
import { protectedRoute } from "../utils/routing";
import { navListMenuItemsGm, navListMenuItemsMember } from "../data/nav-data";

export const GuardedRoute = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [isNotAccessRoute, setIsNotAccessRoute] = useState<boolean>(false);
  const { currentUser } = UseUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    const memberIsNotAccess =
      (!currentUser || currentUser.role == Role.MEMBER) &&
      protectedRoute(navListMenuItemsGm).includes(pathname);
    const gmIsNotAccess =
      protectedRoute(navListMenuItemsMember).includes(pathname) &&
      !!currentUser &&
      currentUser.role == Role.GM;
    const checkPath = () => {
      if (memberIsNotAccess || gmIsNotAccess) setIsNotAccessRoute(true);
    };
    checkPath();
  }, [currentUser, pathname]);

  useEffect(() => {
    if (isNotAccessRoute) {
      navigate(-1);
    }
  }, [isNotAccessRoute, navigate]);

  return <>{children}</>;
};
