import React from "react";
import Trending from "./Trending";
import "./Trending.scss";
import Lottie from "lottie-react";
import yellow from "../../assets/ELA Assets/Yellow marker.json";
import maths from "../../assets/hot-topic/maths.svg";
import physics from "../../assets/hot-topic/physics.svg";
import science from "../../assets/hot-topic/science.svg";
export const datas = [
  {
    img: maths,
    levels: 4,
    price: 200,
    heading: "Foundational Science & Visualization Masterclass",
    studentNum: 200,
  },
  {
    img: physics,
    levels: 7,
    price: 150,
    heading: "Computer science & Programming Developement",
    studentNum: 700,
  },
  {
    img: science,
    levels: 8,
    price: 350,
    heading: "Physics with Allied Chemistry",
    studentNum: 300,
  },
];
const TrendingMain: React.FC = () => {
  return (
    <div id="trending-card">
      <div className="background-yellow">
        <Lottie animationData={yellow} loop={true} />
        <div className="explore-heading">Explore What's Trending</div>
      </div>
      <div className="trending-card-main">
        {datas.map((item, index) => (
          <div key={index}>
            <Trending
              img={item.img}
              levels={item.levels}
              price={item.price}
              heading={item.heading}
              studentNum={item.studentNum}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMain;
