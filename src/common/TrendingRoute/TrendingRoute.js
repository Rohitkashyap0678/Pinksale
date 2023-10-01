import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TrendingRoute = ({ headingName, hashtagValue }) => {
  return (
    <>
      <Box className="flex gap-1  items-center">
        <Typography
          variant="subtitle1"
          className="!text-[12px] font-medium text-black"
          color="initial"
        >
          {hashtagValue}
        </Typography>
        <Typography
          variant="subtitle1"
          className="!text-[12px] cursor-pointer  font-medium primaryText"
          color="initial"
        >
          {headingName}
        </Typography>
      </Box>
    </>
  );
};

export default TrendingRoute;
