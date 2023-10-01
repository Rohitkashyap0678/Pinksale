import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FooterContent = () => {
  return (
    <>
    <Box className="mt-2">
      <Typography variant="h6" className="!text-[15px] text-center !leading-6">
        Disclaimer: PinkSale will never endorse or encourage that you invest in
        any of the projects listed and therefore, accept no liability for <br className="hidden lg:block" />{" "}
        any loss occasioned. It is the user(s) responsibility to do their own
        research and seek financial advice from a professional. More <br className="hidden lg:block"  />{" "}
        information about (DYOR) can be found via
        <Link className="primaryText">&nbsp;Binance Academy.</Link>
      </Typography>
    </Box>
    </>
  );
};

export default FooterContent;
