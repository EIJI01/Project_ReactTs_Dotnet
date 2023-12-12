import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  ListItem,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavList } from "./NavList";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../../contexts/ContextProvider";
import { useStateDispatchContext } from "../../hooks/useStateDispatchHook";
import { memo, useState } from "react";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const NavbarLayouts = memo((): JSX.Element => {
  const [menuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const [menuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);
  const { currentUser } = UseUserContext();
  const { currentLanguage, currentColor, openNav, setOpenNav } = useStateDispatchContext();
  const navigate = useNavigate();

  return (
    <Navbar
      placeholder=""
      className="mx-auto max-w-screen-bestLarg px-10 py-5 dark:bg-main-dark-bg fixed z-40"
      fullWidth
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          placeholder=""
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 dark:text-main-dark-text"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {currentUser ? (
            <Menu
              open={false}
              handler={() => {}}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Typography placeholder="" as="div" variant="small" className="font-medium">
                  <ListItem
                    placeholder=""
                    className="flex items-center gap-2 py-2 pr-4 font-medium text-main-text"
                    selected={false}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    style={{ backgroundColor: currentColor }}
                  >
                    <Avatar
                      placeholder=""
                      size="sm"
                      alt="avatar"
                      src={currentUser.image}
                      className="border mr-2"
                      style={{ border: `4px solid ${currentColor}` }}
                    />

                    <Typography
                      placeholder={``}
                      className={`${
                        currentColor ? "text-main-dark-text text-sm" : "text-main-bure-text"
                      } dark:text-main-dark-text text-sm`}
                    >
                      {currentLanguage.languages === "Thai" ? (
                        <span className="text-md font-semibold">สวัสดี</span>
                      ) : (
                        <span className="text-md font-semibold">Hi,</span>
                      )}{" "}
                      {currentUser.name}
                    </Typography>
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`hidden h-3 w-3 transition-transform lg:block ${
                        currentColor ? "text-main-dark-text text-sm" : "text-main-bure-text"
                      } dark:text-main-dark-text ${menuOpen ? "rotate-180" : ""}`}
                    />
                  </ListItem>
                </Typography>
              </MenuHandler>
            </Menu>
          ) : (
            <>
              <ButtonCustom
                variant="outlined"
                size="sm"
                onClick={() => navigate("/login")}
                className="dark:text-main-dark-text"
              >
                {currentLanguage.languages === "Thai" ? "เข้าสู่ระบบ" : "Log In"}
              </ButtonCustom>
              <ButtonCustom
                variant="gradient"
                color={currentColor}
                className="text-main-dark-text"
                size="sm"
                onClick={() => navigate("/register")}
              >
                {currentLanguage.languages === "Thai" ? "ลงทะเบียน" : "Sign In"}
              </ButtonCustom>
            </>
          )}
        </div>
        <IconButton
          placeholder=""
          variant="text"
          color="blue-gray"
          className="lg:hidden dark:text-main-dark-text"
          onClick={() => setOpenNav(!openNav)}
          style={{ color: currentColor }}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <ButtonCustom
            variant="outlined"
            size="sm"
            fullWidth
            onClick={() => navigate("/login")}
            className="dark:text-main-dark-text"
          >
            Log In
          </ButtonCustom>
          <ButtonCustom
            variant="gradient"
            size="sm"
            color={currentColor}
            fullWidth
            onClick={() => navigate("/register")}
          >
            Sign In
          </ButtonCustom>
        </div>
      </Collapse>
    </Navbar>
  );
});

export default NavbarLayouts;
