import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";

const Qualification_tree = () => {
  return (
    <div className="Qualification-section">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#282828", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          date="2015 - 2019"
          iconStyle={{ background: " #202945", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Under Gradudation</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sri Venkateswara College Of Enginnering
          </h4>
          <p>B.E - Electrical & Electronics Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#202945", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #202945" }}
          date="2014 - 2015"
          iconStyle={{ background: "#152028", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Higher Secondary</h3>
          <h4 className="vertical-timeline-element-subtitle">
          DAV BHEL SCHOOL
          </h4>
          <p>
            Computer Science 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#282828", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #282828" }}
          date="2012 - 2013"
          iconStyle={{ background: "#b3b3b3", color: "#fff" }}
          //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Senior Secondary
          </h3>
          <h4 className="vertical-timeline-element-subtitle">DAV BHEL SCHOOL</h4>
          {/* <p>Strategy, Social Media</p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          //   icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Qualification_tree;
