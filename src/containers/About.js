import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <p className="About">
      <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Repellat et similique harum vero soluta  exercitationem <br /> accusantium neque eos alias asperiores commodi, omnis <br /> officiis saepe dolores sunt voluptas distinctio. Dignissimos, <br /> impedit. Lorem ipsum dolor sit amet consectetur  adipisicing <br /> elit. Nesciunt, possimus 
      asperiores officia voluptatibus <br /> voluptatem quasi quod expedita officiis nostrum  </h5>
      </p>
      <FontAwesomeIcon className="OtherIcon" icon={faClipboardList} size="10x" />
    </div>
  );
};

export default About;
