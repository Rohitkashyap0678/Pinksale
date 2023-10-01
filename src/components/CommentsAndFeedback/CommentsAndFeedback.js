import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Dropdown from "../../common/Dropdown/Dropdown";
import HttpsIcon from "@mui/icons-material/Https";
import MailIcon from "@mui/icons-material/Mail";
import disqusLog from "../../assets/disqus.svg";
import disqueLogo from "../../assets/disque.png";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const CommentsAndFeedback = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="sm:p-4 p-3">
        <Box>
          <Box
            className="flex items-center justify-between"
            style={{ borderBottom: "1px solid #c2c6cc" }}
          >
            <Typography variant="h5" className="!font-semibold !text-lg ">
              0 Comments
            </Typography>
            <Typography
              variant="h5"
              className="!font-semibold flex items-center !text-lg "
            >
              Login
              <Dropdown />
            </Typography>
          </Box>
          <Box className="comment">
            <Box className="comment__logo">
              <p>G</p>
            </Box>
            <Box className="comment__form">
              <input placeholder="Start the discussion..." />
              <Box className="comment__form_login">
                <Box>
                  <p>LOG IN WITH</p>
                  <Box className="flex items-center gap-1">
                    <Typography variant="h5" className="!font-bold !text-sm">
                      <img
                        src={disqueLogo}
                        style={{
                          height: "40px",
                          margin: "0",
                          padding: "0",
                        }}
                      />
                    </Typography>
                    <Typography variant="h5" className="!font-bold !text-sm">
                      <FacebookRoundedIcon
                        style={{
                          color: "#fff",
                          background: "#4F67A4",
                          padding: "5px",
                          borderRadius: "50%",
                        }}
                        fontSize="large"
                      />{" "}
                    </Typography>
                    <Typography variant="h5" className="!font-bold !text-sm">
                      <TwitterIcon
                        style={{
                          color: "#fff",
                          background: "#19B2F1",
                          padding: "5px",
                          borderRadius: "50%",
                        }}
                        fontSize="large"
                      />{" "}
                    </Typography>
                    <Typography variant="h5" className="!font-bold !text-sm">
                      <GoogleIcon
                        style={{
                          color: "#fff",
                          background: "#E63242",
                          padding: "5px",
                          borderRadius: "50%",
                        }}
                        fontSize="large"
                      />{" "}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <p>
                    OR SIGN UP WITH DISQUS <img />
                  </p>
                  <input placeholder="Name" />
                  <input placeholder="Email" />
                  <input placeholder="Password" />
                  <p>
                    Please access our <a href="#">Privacy Policy</a> to learn
                    what personal data Disqus collects and your choices about
                    how it is used. All users of our service are also subject to
                    our <a href="#">Terms of Service.</a>
                  </p>
                  <Typography
                    variant="h5"
                    className="!font-bold !text-lr text-right"
                  >
                    <ArrowRightAltIcon
                      style={{
                        color: "#fff",
                        background: "#778289",
                        padding: "1px 12px",
                        borderRadius: "3px",
                        width: "56px",
                      }}
                      fontSize="large"
                    />{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* <Box id="summernote"></Box>       */}
          </Box>
          <Box className="comments">
            <Box sx={{ width: "100%", typography: "body1", m: "30px 0" }}>
              <TabContext value={value}>
                <Box className="flex justify-between items-center gap-4">
                  <Box className="flex items-center gap-4">
                    <Typography variant="h5" className="!font-bold !text-sm">
                      <FavoriteBorderIcon fontSize="small" />{" "}
                    </Typography>
                    <Typography
                      className="!font-bold !text-sm p-0 m-0"
                      label="Best"
                    >
                      Share
                    </Typography>
                  </Box>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    sx={{}}
                    textColor="secondary"
                  >
                    <Tab
                      className="!font-bold !text-sm p-0 m-0"
                      label="Best"
                      value="1"
                    />
                    <Tab label="Newest" value="2" />
                    <Tab label="Oldest" value="3" />
                  </TabList>
                </Box>
                <Box className="flex justify-center items-center mt-5 mb-5">
                  <TabPanel className="!text-sm" value="1">
                    Be the first to comment Best.
                  </TabPanel>
                  <TabPanel className="!text-sm" value="2">
                    Be the first to comment Newest.
                  </TabPanel>
                  <TabPanel className="!text-sm" value="3">
                    Be the first to comment Oldest.
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>
          <Box
            className="flex items-center justify-between pt-2 mt-4"
            style={{ borderTop: "1px solid #c2c6cc" }}
          >
            <Box className="flex items-center gap-4" sx={{ flexWrap: "wrap" }}>
              <Typography variant="h5" className="!font-bold !text-sm">
                <MailIcon
                  style={{
                    color: "#fff",
                    background: "#656C7A",
                    padding: "2px",
                    borderRadius: "5px",
                  }}
                  fontSize="small"
                />{" "}
                Subscribe
              </Typography>
              <Typography variant="h5" className="!font-bold !text-sm ">
                <HttpsIcon
                  style={{
                    color: "#fff",
                    background: "#656C7A",
                    padding: "2px",
                    borderRadius: "5px",
                  }}
                  fontSize="small"
                />{" "}
                Privacy
              </Typography>
              <Typography variant="h5" className="!font-bold !text-sm ">
                <PriorityHighIcon
                  style={{
                    color: "#fff",
                    background: "#656C7A",
                    padding: "2px",
                    borderRadius: "5px",
                  }}
                  fontSize="small"
                />{" "}
                Do Not Sell My Data
              </Typography>
            </Box>
            <Box>
              <img className="disqusLog" src={disqusLog} alt="disqusLogo" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CommentsAndFeedback;