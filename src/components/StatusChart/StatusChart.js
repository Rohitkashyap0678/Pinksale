import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import { Link } from "react-router-dom";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MidContentTableData from "../MidContentTableData/MidContentTableData";

const StatusChart = () => {
  return (
    <>
      <Box className="sm:p-3 p-1">
        <Box>
          <Typography
            variant="h6"
            style={{ border: "1px solid #ffe799" }}
            className="text-yellow-500 py-3  px-3 !font-medium !text-sm bg-[#fffbe6]"
            color="initial"
          >
            Make sure the website is pinksale.finance!
          </Typography>
          <Box className="mt-8">
            <ProgressBar />
            <MidContentTableData
              TableDataValue="1 ETH"
              className="!text-[12px]"
              TableDataText="17.23930184 ETH"
            />
          </Box>
          <Box className="mt-4">
            <Typography
              variant="h6"
              className="text-black !text-base text-center"
              color="initial"
            >
              This pool has ended
            </Typography>
            <Box className="text-center mt-[10px]">
              <Link to="/" className="primaryText">
                <TrendingUpOutlinedIcon className="primaryText !w-5 !h-5 mr-1 " />
                View Chart | Buy/Sell
              </Link>
            </Box>
            <Box className="text-start mt-1">
              <Link to="/" className="primaryText underline">
                Auto Buy
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StatusChart;
