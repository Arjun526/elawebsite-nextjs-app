import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperMain.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import imgss from "../../assets/ELA Assets/Animation - 1710316186142.json";
import boy from "../../assets/Books/boys.png";
import boy2nd from "../../assets/Books/pikaso_boy.png";
import Swipe from "./Swipe";
const swiperData = [
  {
    id: "201",
    headingText: "Learn anywhere",
    subHeadings: "Enhance your skills, at home or when you are mobile.",
    imgsss: boy,
  },
  {
    id: "202",
    headingText: "Dynamic learning",
    subHeadings:
      "Videos, audios, fun & interactive practice activities, quizzes and more.",
    imgsss: boy2nd,
  },
  {
    id: "203",
    headingText: "Unique learning experience",
    subHeadings:
      "Every concept you learn takes you through our unique IRPA model. Introduce. Practice. Reinforce. Assess. Ensuring that you learn.",
    imgsss: imgss,
    isLottie: true,
  },
  {
    id: "204",
    headingText: "Upskill",
    subHeadings: "Enhance your skills, at home or when you are mobile.",
    imgsss: require("../../assets/ELA Assets/Animation - confetti.json"),
    isLottie: true,
  },
];

const SwipeMain: React.FC = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        clickable={true}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="landing-main-blue-swiper"
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id}>
            <Swipe
              headingText={item.headingText}
              imgsss={item.imgsss}
              subHeadings={item.subHeadings}
              id={item.id}
              isLottie={item.isLottie}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwipeMain;
export {};
