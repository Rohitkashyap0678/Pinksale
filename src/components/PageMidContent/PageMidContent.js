import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ProfileSideContent from "../ProfileSideContent/ProfileSideContent";
import StatusChart from "../StatusChart/StatusChart";
import StatusBarTableBox from "../../ui/StatusBarTableBox/StatusBarTableBox";
import AccordionComponent from "../AccordionComponent/AccordionComponent";
import DoughnutChart from "../../common/DoughnutChart/DoughnutChart";
import SubscribeCaption from "../SubscribeCaption/SubscribeCaption";
import CommentsAndFeedback from "../CommentsAndFeedback/CommentsAndFeedback";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  border: "1px solid #f0f0f0",
  color: theme.palette.text.secondary,
}));

const PageMidContent = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <Item>
            <ProfileSideContent />
          </Item>
          <Item className="mt-6 !p-0">
            <DoughnutChart />
          </Item>
          <Item className="mt-6 !p-0">
            <AccordionComponent />
          </Item>  
          <Item className="mt-6 !p-0">
            <CommentsAndFeedback />
          </Item>  
        </Grid>
        <Grid item  lg={4} md={12} sm={12} xs={12}>
          <Item>
            <StatusChart />
          </Item>
          <Item className="mt-6">
            <StatusBarTableBox />
          </Item>
          <Item className="mt-6 !p-0">
            <SubscribeCaption />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageMidContent;
