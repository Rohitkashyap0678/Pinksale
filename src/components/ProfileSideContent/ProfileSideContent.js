import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profilCcontent from "../../assets/profilCcontent.png";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

import CopyIconTypography from "../CopyIconTypography/CopyIconTypography";
import MidContentTableData from "../MidContentTableData/MidContentTableData";

const ProfileSideContent = () => {
  const midContentData = [
    { TableDataValue: "Calcium2⁺", TableDataText: "Token Name" },
    { TableDataValue: "CAL2⁺", TableDataText: "Token Symbol" },
    { TableDataValue: "18", TableDataText: "Token Decimals" },
  ];

  const tableData = [
    { TableDataValue: "1,000,000,000 CAL2⁺", TableDataText: "Token Supply" },
    {
      TableDataValue: "640,000,000 CAL2⁺",
      TableDataText: "Tokens For Presale",
    },
    {
      TableDataValue: "319,872,000 CAL2⁺",
      TableDataText: "Tokens For Liquidity",
    },
    { TableDataValue: "1 ETH", TableDataText: "Soft Cap" },
    {
      TableDataValue: "2023.09.26 18:30 (UTC)",
      TableDataText: "Presale Start Time",
    },
    {
      TableDataValue: "2023.09.27 18:30 (UTC)",
      TableDataText: "Presale End Time",
    },
    {
      TableDataValue: "Listing On",
      TableDataText: "Uniswap",
      className: "!text-red-600",
    },
    { TableDataValue: "51%", TableDataText: "Liquidity Percent" },
    {
      TableDataValue: "Time 2024.09.26 18:36 UTC (in a year)",
      TableDataText: "Liquidity Unlocked",
      className: "!text-red-600",
    },
  ];

  const icons = {
    LanguageIcon,
    TwitterIcon,
    TelegramIcon,
  };

  const socialIcons = ["LanguageIcon", "TwitterIcon", "TelegramIcon"];

  return (
    <Box className="sm:p-3 p-1">
      <Grid container spacing={2}>
        <Grid item xs={12} md={1} className="relative">
          <img
            src={profilCcontent}
            className="mt-1 !w-20 cursor-pointer "
            alt="profile icon"
          />
           <Typography
                  variant="h4"
                  className="!text-xs py-1 md:hidden  flex px-2 items-center absolute top-8 right-0 whitespace-nowrap gap-1 rounded-2xl w-fit font-semibold !text-red-600 bg-red-100"
                >
                  <span className="bg-red-600 rounded-full !w-2 !h-2"></span>
                  Sale Ended
                </Typography>
        </Grid>
        <Grid item xs={12} md={11}>
          <Box>
            <Box className="md:flex grid md:gap-0 gap-5  justify-between">
              <Box className="">
                <Box className="md:flex flex   items-center gap-2">
                  <Typography
                    // variant="h4"
                    className="!font-semibold md:text-[22px] text-small text-base"
                    color="initial"
                  >
                    Calcium2⁺ Fair Launch
                  </Typography>
                  <Typography
                    variant="contained"
                    className="text-white text-xs !py-1 md:!mr-0 !w-fit cursor-pointer rounded !px-2 !bg-[#00bcd4]"
                  >
                    Audit
                  </Typography>
                  <Typography
                    variant="contained"
                    className="text-white text-xs !py-1 !w-fit cursor-pointer rounded !px-2 !bg-[#48c774]"
                  >
                    KYC
                  </Typography>
                </Box>
                <Box className="flex gap-2 !mt-2 items-center">
                  {socialIcons.map((iconName, index) => {
                    const IconComponent = icons[iconName];
                    return (
                      <IconComponent
                        key={index}
                        className="primaryText cursor-pointer !w-5 !h-5"
                      />
                    );
                  })}
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  className="!text-xs py-1 md:flex hidden px-2 items-center whitespace-nowrap gap-1 rounded-2xl w-fit font-semibold !text-red-600 bg-red-100"
                >
                  <span className="bg-red-600 rounded-full !w-2 !h-2"></span>
                  Sale Ended
                </Typography>
              </Box>
            </Box>
            <Box className="mb-2 md:mt-4 mt-2">
              <Typography
                variant="caption"
                className="!text-sm !leading-6"
                color="initial"
              >
                Make your wallet stronger with Calcium2⁺ 🥛. Better and deluxe
                version of Calcium! Missed that hype? Now you have greater
                chance to gain 😎 No teamtokens ⭕️ Contract renounce
                🏆Experienced team 🌕 CMC/CG Fast Track ✅ Avedex Trending 🍼
                +150 top callers ✅ Twitter best influencers partnership booked
                ✅ 1/1 taxes✅ Liquidity Locked 1 year ✅ HUGE postlaunch
                marketing😎
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box className="mt-8">
        <CopyIconTypography
          textName="Presale Address"
          copyTextValue="0x8fEa56e859FF0da3FB55EDe94ae130C735DFcaa9"
        />
        {midContentData.map((item, index) => (
          <MidContentTableData
            key={index}
            TableDataValue={item.TableDataValue}
            TableDataText={item.TableDataText}
          />
        ))}
        <CopyIconTypography
          textName="Token Address"
          copyTextValue="0x8fEa56e859FF0da3FB55EDe94ae130C735DFcaa9"
          copyDefineName="(Do not send ETH to the token address!)"
        />
        {tableData.map((item, index) => (
          <MidContentTableData
            key={index}
            TableDataValue={item.TableDataValue}
            TableDataText={item.TableDataText}
            className={item.className || ""}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProfileSideContent;
