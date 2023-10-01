import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CopyIconTypography = ({ textName, copyTextValue, copyDefineName }) => {
  return (
    <>
      <Box className="">
        <Box
          className="md:flex grid items-center justify-between py-2"
          style={{ borderBottom: "1px solid #f0f0f0" }}
        >
          <Typography variant="subtitle1" color="initial" className="text-sm">
            {textName}
          </Typography>
          <Box>
            <Typography
              variant="subtitle2"
              color="initial"
              className="text-sm wordBreak cursor-pointer md:text-end text-start flex gap-1 ml-auto primaryText"
            >
              {copyTextValue}
              <ContentCopyIcon className="primaryText !w-4 !h-5 cursor-pointer" />
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              className="!text-xs !mt-1 !mb-1 !text-blue-500 w-full md:justify-end text-start flex gap-1 ml-auto"
            >
              {copyDefineName}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CopyIconTypography;
