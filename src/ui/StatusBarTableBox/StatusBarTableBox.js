import React from "react";
import Box from "@mui/material/Box";
import MidContentTableData from "../../components/MidContentTableData/MidContentTableData";
import TimelineStatus from "../../common/TimelineStatus/TimelineStatus";
import PoolStatus from "../../common/PoolStatus/PoolStatus";

const StatusBarTableBox = () => {
  const tableData = [
    { value: "ended", text: "Status", className: "primaryText cursor-pointer" },
    { value: "0 CAL2⁺", text: "Unsold token" },
    {
      value: "Public",
      text: "Sale Type",
      className: "primaryText cursor-pointer",
    },
    { value: "1 ETH = 37,124,473.25 CAL2⁺", text: "Current Rate" },
    { value: "0.5 ETH", text: "Max Contribution" },
    { value: "105", text: "Total Contributors" },
  ];
  return (
    <>
      <Box className="sm:p-3 p-1">
        <Box>
          <Box>
            <PoolStatus />
            <Box className="mt-2">
              <TimelineStatus />
            </Box>
            <Box className="mt-2">
              {tableData.map((data, index) => (
                <MidContentTableData
                  key={index}
                  TableDataValue={data.value}
                  TableDataText={data.text}
                  className={data.className}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StatusBarTableBox;
