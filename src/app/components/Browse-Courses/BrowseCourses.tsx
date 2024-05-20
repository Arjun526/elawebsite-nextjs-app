import "./BrowseCourses.scss";
import Card from "./Card";
import Lottie from "lottie-react";
import Bluebg from "../../assets/ELA Assets/blue marker.json";
import math1 from "../../assets/icons-sec/math-1st.svg";
import math2 from "../../assets/icons-sec/math-2nd.svg";
import fincial1 from "../../assets/icons-sec/fincial-1.svg";
import fincial2 from "../../assets/icons-sec/fincial-2.svg";
import cyber1 from "../../assets/icons-sec/cyber-1.svg";
import cyber2 from "../../assets/icons-sec/cyber-2.svg";

export const data = [
  {
    heading: "21ST CENTURY SKILLS",
    icons: math1,
    topics: "Maths",
    user: "4000",
    learner: "learner",
    icons2: math2,
    topic: "science",
    user2: "600",
  },
  {
    heading: " SUBJECT EXPERT COURSES",
    icons: fincial1,
    topics: "Financial Literacy",
    user: "5000k",
    learner: "learner",
    icons2: fincial2,
    topic: "Cyber Security",
    user2: "50k",
  },
  {
    heading: "GRADUATE COURSES",
    icons: cyber1,
    topics: "Financial Literacy",
    user: "5000k",
    learner: "learner",
    icons2: cyber2,
    topic: "Cyber Security",
    user2: "50k",
  },
];
const BrowseCourses: React.FC = () => {
  return (
    <div id="Browse-Courses">
      {/* <div className="heading-text"> */}
      <div className="background-text-blue">
        <Lottie animationData={Bluebg} loop={true} />
        <div className="background-text">
          Browse Courses by Grade, Age, or Subject
        </div>
      </div>
      {/* </div> */}
      <div className="main-card-section">
        {data.map((item, index) => (
          <div key={index}>
            <Card
              heading={item.heading}
              icons={item.icons}
              topics={item.topics}
              topic={item.topic}
              user={item.user}
              learner={item.learner}
              index={index}
              icons2={item.icons2}
              user2={item.user2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCourses;
