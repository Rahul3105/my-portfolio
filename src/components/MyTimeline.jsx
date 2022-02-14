import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { MdOutlineWork, MdSchool } from "react-icons/md";
import styled from "styled-components";
import SectionTemplate from "./SectionTemplate";
export default function MyTimeline() {
  return (
    <SectionTemplate id={"myTimeline"} title={"My Timeline"}>
      <Timeline position="alternate">
        <MyTimelineItem
          icon={<MdOutlineWork />}
          oppositeContent={"Augest 2021 - Present"}
          content={
            <StyledTimelineContent>
              <p className="heading">Instructional Associate</p>
              <p className="subHeading">Masai School</p>
              <p className="content">
                Leading all the Instructional Associates for Calendly,Pair
                Programming and Clearing student's conceptual doubts via
                standups,reviewing student's projects, reporting to the
                instructor.
              </p>
            </StyledTimelineContent>
          }
        />

        <MyTimelineItem
          icon={<MdSchool />}
          oppositeContent={"March 2021 - Augest 2021"}
          content={
            <StyledTimelineContent>
              <p className="heading">Student</p>
              <p className="subHeading">Masai School</p>
              <p className="content">
                Joined MERN Stack Developer Bootcamp to learn Software
                Development and Data Structures
              </p>
            </StyledTimelineContent>
          }
        />

        <MyTimelineItem
          icon={<MdSchool />}
          oppositeContent={"July 2018 - Augest 2021"}
          content={
            <StyledTimelineContent>
              <p className="heading">Bachelor of Arts</p>
              <p className="subHeading">Delhi University</p>
            </StyledTimelineContent>
          }
        />
      </Timeline>
    </SectionTemplate>
  );
}

const StyledTimelineContent = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 400px;
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  & > .heading {
    font-size: 18px;
    font-weight: bold;
  }
  & > .subHeading {
    margin-bottom: 20px;
  }
`;

const MyTimelineItem = ({ oppositeContent, content, icon }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {oppositeContent}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>{content}</TimelineContent>
    </TimelineItem>
  );
};
