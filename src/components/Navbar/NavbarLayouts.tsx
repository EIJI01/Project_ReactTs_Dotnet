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
import { Tooltip } from "@material-tailwind/react";
import logo from "../../assets/logo-boardgame.png";

const NavbarLayouts = memo((): JSX.Element => {
  const [menuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const [menuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);
  const { currentUser } = UseUserContext();
  const { currentLanguage, currentColor, openNav, setOpenNav } = useStateDispatchContext();
  const navigate = useNavigate();

  return (
    <Navbar
      placeholder=""
      className="mx-auto max-w-screen-bestLarg px-10 py-5 dark:bg-main-dark-bg fixed z-40 overflow-hidden dark:border-main-dark"
      fullWidth
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="lg:ml-2 mr-4">
          <div className="bg-white rounded-lg w-fit mx-auto">
            <img src={logo} alt="" className="w-auto h-8 dark:lg-max:h-10" />
          </div>
          <Typography
            placeholder=""
            as="a"
            href="#"
            className=" cursor-pointer lg:text-[12px] font-semibold  dark:text-main-dark-text dark:lg-max:hidden"
          >
            Boardgame Everyday
          </Typography>
        </div>
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
                  <Tooltip content={"profile"} placement="bottom">
                    <ListItem
                      placeholder=""
                      className="flex items-center gap-2 py-1 pr-4 font-medium text-main-text"
                      selected={false}
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                      style={{ backgroundColor: currentColor }}
                    >
                      <Avatar
                        placeholder=""
                        size="sm"
                        alt="avatar"
                        src={currentUser.image}
                        className="  "
                        style={{ border: `2px solid white` }}
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
                  </Tooltip>
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
