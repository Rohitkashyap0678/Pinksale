import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import SidebarDrawer from "../../components/SidebarDrawer/SidebarDrawer";
import { styled } from "@mui/material/styles";
import TrendingRoute from "../../common/TrendingRoute/TrendingRoute";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PageMidContent from "../../components/PageMidContent/PageMidContent";
import FooterContent from "../../common/FooterContent/FooterContent";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const trendingItems = [
  { hashtagValue: "#1", headingName: "ZORO" },
  { hashtagValue: "#2", headingName: "ElonCAT" },
  { hashtagValue: "#3", headingName: "SCARAB" },
  { hashtagValue: "#4", headingName: "HLR" },
  { hashtagValue: "#5", headingName: "MotaG" },
  { hashtagValue: "#6", headingName: "$BWSM" },
  { hashtagValue: "#7", headingName: "GOG" },
  { hashtagValue: "#8", headingName: "MNX" },
  { hashtagValue: "#9", headingName: "KONGAPE" },
  { hashtagValue: "#10", headingName: "GRP" },
  { hashtagValue: "#11", headingName: "FROGLORD2049" },
  { hashtagValue: "#12", headingName: "DFM" },
];

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SidebarDrawer />
      <Box className="w-full">
        <DrawerHeader />
        <Box className="px-4 2xl:px-0">
          <Box className="flex items-center w-full py-4 2xl:px-6 gap-4 paper-scrollbar-trending overflow-x-auto">
            <Typography
              variant="h6"
              className="flex !text-sm !font-semibold  items-center"
            >
              <TrendingUpOutlinedIcon className="primaryText !w-5 !h-5 mr-1 " />
              Trending
            </Typography>
            {trendingItems.map((item, index) => (
              <TrendingRoute
                key={index}
                hashtagValue={item.hashtagValue}
                headingName={item.headingName}
              />
            ))}
          </Box>
        </Box>
        <Box
          component="main"
          className="container md:px-10 px-5 md:my-20 my-4 m-auto max-w-[1200px]"
          sx={{ flexGrow: 1 }}
        >
          <PageMidContent />
          <Box className="mt-8">
            <FooterContent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
