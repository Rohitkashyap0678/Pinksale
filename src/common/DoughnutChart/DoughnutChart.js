import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const DoughnutChart = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Presale", "Liquidity", "Unloacked"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });

    // Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <Box className="bg-[#f0f0f0]">
        <Typography
          variant="h5"
          className="!font-semibold !text-lg py-3 px-4"
          style={{ borderBottom: "1px solid #f0f0f0" }}
        >
          Token Metrics
        </Typography>
      </Box>
      <Box className="m-auto justify-center flex py-7">
        <canvas
          ref={chartRef}
          width={200}
          className="!max-w-[300px] !max-h-[300px]"
          height={200}
        />
      </Box>
    </>
  );
};

export default DoughnutChart;
