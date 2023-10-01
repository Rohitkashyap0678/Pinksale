import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckBox from "../../common/CheckBox/CheckBox";
import InputField from "../../common/InputField/InputField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const SubscribeCaption = () => {
  return (
    <>
      <Box className="pb-2">
        <Box
          className="md:flex grid items-center justify-between"
          style={{ borderBottom: "1px solid #f0f0f0" }}
        >
          <Typography
            variant="h5"
            className="!font-semibold md:!text-lg !text-base py-3 md:px-4 px-3"
          >
            Newsletters
          </Typography>
          <CheckBox className="!ml-2" label="Never show again" />
        </Box>
        <Box className="md:px-6 px-3 pt-7 pb-5">
          <Typography
            variant="span"
            className="!text-sm !leading-[22px] !text-black !font-normal"
          >
            Sign up our mailing list to receive our new presales, features, tips
            and reviews for next 100x projects.
          </Typography>
          <Box className="mt-4">
            <InputField placeholder="Enter Your Email Address" />
            <Button
              variant="contained"
              className="!text-white !mt-4 !rounded-sm !capitalize !bg-[#f95192]"
            >
              <MailOutlineIcon className="text-white !w-5 !mr-1 !h-5" />
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SubscribeCaption;
