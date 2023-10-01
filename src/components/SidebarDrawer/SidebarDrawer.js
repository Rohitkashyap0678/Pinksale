import React, { useState, useEffect } from 'react';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import webLogo from "../../assets/webLogo.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ethIcon from "../../assets/ethIcon.png";
import MobileHeader from "../../common/MobileHeader/MobileHeader";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`, 
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SidebarDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [secondCollapseOpen, setSecondCollapseOpen] = React.useState(false);
  const [pinkLock, setPinkLock] = React.useState(false);
  const [airdrop, setAirdrop] = React.useState(false);
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const collapseHandleClick = () => {
    setCollapseOpen(!collapseOpen);
  };

  const collapseHandleClickSecond = () => {
    setSecondCollapseOpen(!secondCollapseOpen);
  };

  const handlePinkLock = () => {
    setPinkLock(!pinkLock);
  };

  const handleAirdrop = () => {
    setAirdrop(!airdrop);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const subMenuItems = [
    "Create Launchpad",
    "Create fair launch",
    "Create dutch auction",
    "Create subscription",
    "Create token",
    "Launchpad List",
  ];

  const privateSaleSubMenuItems = ["Create Private Sale", "Private Sale List"];

  const pinkLockSubMenuItems = ["Create Lock", "Token", "Liquidity"];
  const airdropSubMenuItems = ["Create Airdrop", "Airdrop List"];

  const items = [
    { icon: <HomeOutlinedIcon />, text: "Buy Crypto Fiat" },
    { icon: <LeaderboardOutlinedIcon />, text: "Leaderboard" },
    { icon: <VerifiedUserOutlinedIcon />, text: "Anti-Bot" },
    { icon: <TrendingUpOutlinedIcon />, text: "dexview.com" },
    { icon: <ReportGmailerrorredOutlinedIcon />, text: "Pools Alert" },
    { icon: <AssignmentIndOutlinedIcon />, text: "KYC & Audit" },
    { icon: <ContactPageOutlinedIcon />, text: "Docs" },
    { icon: <ShoppingCartOutlinedIcon />, text: "Shop" },
    { icon: <TelegramIcon />, text: "telegram" },
    { icon: <TwitterIcon />, text: "Twitter" },
    { icon: <FacebookIcon className="primary" />, text: "Facebook" },
  ];

  const openSidebarMobileView = () => {
    setIsMobileHeaderOpen(true);
  };

  const closeSidebarMobileView = () => {
    setIsMobileHeaderOpen(false);
  };
















  

  return (
    <>
      <AppBar
        position="fixed"
        className="custom-header !shadow-sm !bg-white"
        open={open}
      >
        <Toolbar>
          <Box className="hidden md:block md:pointer-events-auto pointer-events-none">
            <IconButton
              aria-label="open drawer"
              className="hidden md:block md:pointer-events-auto pointer-events-none"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon className="hidden md:block md:pointer-events-auto pointer-events-none" />
            </IconButton>
          </Box>




          {/* <Box className={`block md:hidden pointer-events-auto md:pointer-events-none ${isMobileHeaderOpen ? "overlay" : ""}`}>
        <IconButton
          aria-label="open drawer"
          onClick={
            isMobileHeaderOpen
              ? closeSidebarMobileView
              : openSidebarMobileView
          }
          className="block md:hidden pointer-events-auto md:pointer-events-none"
        >
          {isMobileHeaderOpen ? (
            <CloseIcon className="block md:hidden !p-0 !m-0 !ml-[-12px] pointer-events-auto md:pointer-events-none" />
          ) : (
            <MenuIcon className="block md:hidden !p-0 !m-0 !ml-[-12px] pointer-events-auto md:pointer-events-none" />
          )}
        </IconButton>
      </Box>
      {isMobileHeaderOpen && (
        <div className="mobile-header-overlay">
          <MobileHeader onClose={closeSidebarMobileView} />
        </div>
      )} */}
          <Box className="block md:hidden  pointer-events-auto md:pointer-events-none">
            <IconButton
              aria-label="open drawer"
              onClick={
                isMobileHeaderOpen
                  ? closeSidebarMobileView
                  : openSidebarMobileView
              }
              className="block md:hidden pointer-events-auto md:pointer-events-none"
            >
              {isMobileHeaderOpen ? (
                <CloseIcon className="block md:hidden !p-0 !m-0 !ml-[-12px] pointer-events-auto md:pointer-events-none" />
              ) : (
                <MenuIcon className="block md:hidden !p-0 !m-0 !ml-[-12px] pointer-events-auto md:pointer-events-none" />
              )}
            </IconButton>
          </Box>
          {isMobileHeaderOpen && (
            <MobileHeader onClose={closeSidebarMobileView} />
          )}
          {/* {isMobileHeaderOpen && (
        <Box className="fixed inset-0 bg-black top-up-mobile-header opacity-50 z-50">
        </Box>
      )}
      {isMobileHeaderOpen && (
        <Box className="fixed inset-0 flex justify-center items-center z-50">
          <Box id="mobile-header" className="bg-white p-4">
            <MobileHeader onClose={closeSidebarMobileView} />
          </Box>
        </Box>
      )} */}

          <Typography
            variant="h6"
            className="text-black flex items-center gap-2 !font-semibold !text-base"
            noWrap
            component="div"
          >
            <img src={webLogo} alt="logo" />
            <span className="text-none-mobile">PinkSale</span>
          </Typography>

          <Box className="md:flex gap-4 hidden item-center justify-end ml-auto">
            <Typography
              variant="span"
              noWrap
              className="text-black items-center flex gap-2 font-medium text-sm bg-gray-200 py-2 px-3 rounded-3xl cursor-pointer hover:bg-gray-300"
              component="div"
            >
              <TrendingUpOutlinedIcon className="font-medium opacity-75" />
              dexview.com
            </Typography>
            <Typography
              variant="span"
              className="text-black items-center flex font-medium text-sm bg-[#f959ae] py-2 px-2 gap-1 rounded-3xl cursor-pointer hover:bg-[#ef54a7]"
              noWrap
              component="div"
            >
              <img src={ethIcon} alt="ETH Image" />
              ETH MAINNET
            </Typography>
            <Typography
              variant="span"
              className="bg-[#f0d8e1] text-[#f959ae] font-semibold text-base py-2 px-6 rounded-3xl cursor-pointer hover:bg-[#f3d7e1]"
              noWrap
              component="div"
            >
              Connect
            </Typography>
          </Box>

          <Box className="flex gap-2 items-center item-center md:hidden justify-end ml-auto">
            <Typography
              variant="span"
              noWrap
              className="text-black items-center flex font-medium text-sm bg-gray-200 py-2 px-2 rounded-3xl cursor-pointer hover:bg-gray-300"
              component="div"
            >
              <TrendingUpOutlinedIcon className="font-medium !w-6 !h-6 opacity-75 mobile-view-icon" />
            </Typography>
            <Typography
              variant="span"
              className="text-black items-center flex font-medium text-sm bg-[#f959ae] py-2 px-2 gap-1 rounded-3xl cursor-pointer hover:bg-[#ef54a7]"
              noWrap
              component="div"
            >
              <img src={ethIcon} className="!w-6 !h-6 mobile-view-icon" alt="ETH Image" />
            </Typography>
            <Typography
              variant="span"
              className="bg-[#f0d8e1] text-[#f959ae] font-semibold text-[13px] py-2 px-2 items-center rounded-2xl cursor-pointer hover:bg-[#f3d7e1]"
              noWrap
              component="div"
            >
              Connect
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        className="paper-scrollbar md:block hidden"
      >
        <DrawerHeader className="!bg-white z-20 sticky h-[70px] top-0 left-0 ">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton className=" primaryBackgroundActive">
            <ListItemIcon className="!min-w-[54px] primary-hover-text">
              <HomeOutlinedIcon className="primary-hover-text primaryText" />
            </ListItemIcon>
            <ListItemText
              className="primary-hover-text primaryText"
              primary="Home"
            />
          </ListItemButton>

          <ListItemButton className="hoverborder" onClick={collapseHandleClick}>
            <ListItemIcon className="!min-w-[54px] primary-hover-text">
              <RocketLaunchOutlinedIcon />
            </ListItemIcon>
            <ListItemText className="primary-hover-text" primary="Launchpads" />
            {collapseOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subMenuItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  sx={{ pl: 8 }}
                  className="hoverborder"
                >
                  <ListItemText className="primary-hover-text" primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton
            className="hoverborder"
            onClick={collapseHandleClickSecond}
          >
            <ListItemIcon className="!min-w-[54px] primary-hover-text">
              <ShieldOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              className="primary-hover-text"
              primary="Private Sale"
            />
            {secondCollapseOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={secondCollapseOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {privateSaleSubMenuItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  sx={{ pl: 8 }}
                  className="hoverborder"
                >
                  <ListItemText className="primary-hover-text" primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton className="hoverborder" onClick={handlePinkLock}>
            <ListItemIcon className="!min-w-[54px] primary-hover-text">
              <LockOpenOutlinedIcon />
            </ListItemIcon>
            <ListItemText className="primary-hover-text" primary="PinkLock" />
            {pinkLock ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={pinkLock} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {pinkLockSubMenuItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  sx={{ pl: 8 }}
                  className="hoverborder"
                >
                  <ListItemText className="primary-hover-text" primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton className="hoverborder" onClick={handleAirdrop}>
            <ListItemIcon className="!min-w-[54px] primary-hover-text">
              <LockOpenOutlinedIcon />
            </ListItemIcon>
            <ListItemText className="primary-hover-text" primary="Airdrop" />
            {airdrop ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={airdrop} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {airdropSubMenuItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  sx={{ pl: 8 }}
                  className="hoverborder"
                >
                  <ListItemText className="primary-hover-text" primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          {items.map((item, index) => (
            <ListItemButton key={index} className="hoverborder">
              <ListItemIcon className="!min-w-[54px] primary-hover-text">
                {item.icon}
              </ListItemIcon>
              <ListItemText
                className="primary-hover-text"
                primary={item.text}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
