import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MidContentTableData = ({ TableDataText, TableDataValue, className }) => {
  return (
    <>
      <Box className="">
        <Box
          className="md:flex grid items-center justify-between py-2"
          style={{ borderBottom: "1px solid #f0f0f0" }}
        >
          <Typography variant="subtitle1" color="initial" className="text-sm">
            {TableDataText}
          </Typography>
          <Box>
            <Typography
              variant="subtitle2"
              color="initial"
              className={`text-sm md:text-end text-start flex gap-1 ml-auto text-black ${className}`}
            >
              {TableDataValue}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MidContentTableData;
