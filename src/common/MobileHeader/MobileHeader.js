import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
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

const drawerWidth = "100%";

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

const MobileHeader = () => {
  const theme = useTheme();
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [secondCollapseOpen, setSecondCollapseOpen] = React.useState(false);
  const [pinkLock, setPinkLock] = React.useState(false);
  const [airdrop, setAirdrop] = React.useState(false);

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

  return (
    <>
      <div
        variant="permanent"
        className="paper-scrollbar overlay md:hidden block shadow-lg mobile-header-height mobile-header-animation "
      >
        <List
          className="!py-3"
          sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
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
      </div>
    </>
  );
};

export default MobileHeader;
