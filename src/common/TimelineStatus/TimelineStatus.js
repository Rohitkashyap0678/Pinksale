import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import "./index.css"

const TimelineStatus = () => {
  return (
    <Timeline className="!px-0">
      <TimelineItem className="timeline">
        <TimelineSeparator className="timelineSaparotor">
          <TimelineDot className="timelineDot" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="!text-[15px]">
          Waiting for pool start
          <Typography variant="h6" className="!text-gray-400 !text-sm"> No one can purchase</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className="timelineSaparotor">
          <TimelineDot className="timelineDot" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="!text-[15px]">
          Pool Start <Typography variant="h6" className="!text-gray-400 !text-sm">Pool starts at 2023.09.26 18:30 (UTC)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className="timelineSaparotor">
          <TimelineDot className="timelineDot" />
        </TimelineSeparator>
        <TimelineContent className="!text-[15px]">
          Pool Ended <Typography variant="h6" className="!text-gray-400 !text-sm">Pool ends at 2023.09.27 18:30 (UTC)</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
export default TimelineStatus;
