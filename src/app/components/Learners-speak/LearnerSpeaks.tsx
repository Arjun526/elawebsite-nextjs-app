import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Learner.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import next from "../../assets/Arrow/left.svg";
import prv from "../../assets/Arrow/right.svg";
import Divider from "@mui/material/Divider";
import img1 from "../../assets/imgs/photo-1.avif";
import img2 from "../../assets/imgs/photo-2.avif";
import img3 from "../../assets/imgs/photo-3.avif";
import img4 from "../../assets/imgs/photo-4.avif";
import img5 from "../../assets/imgs/photo-5.avif";
import img6 from "../../assets/imgs/photo-6.avif";
import img7 from "../../assets/imgs/photo-7.avif";
import Lottie from "lottie-react";
import blue from "../../assets/ELA Assets/blue marker.json";
import Image from "next/image";
const imgData = [
  {
    id: "101",
    image: img1,
    data: "As a dedicated educator, I've had the privilege of witnessing the transformative power of education firsthand. From guiding students through moments of academic breakthroughs to nurturing their personal growth, every day in the classroom presents new opportunities to inspire and be inspired ",
    name: "Manesh Ready",
    work: "Teacher",
  },
  {
    id: "102",
    data: "I've learned that teaching extends far beyond textbooks and lesson plans; it's about fostering a supportive learning environment where students feel valued and empowered to reach their full potential ",
    name: "Dina Fok",
    work: "Founder",
    image: img2,
  },
  {
    id: "103",
    data: "Whether it's celebrating their achievements or offering guidance during challenges, being a teacher means being a mentor, a motivator, and a lifelong learner ",
    name: "Deepaka kumari",
    work: "Ceo",
    image: img3,
  },
  {
    id: "104",
    data: "Through moments of triumph and moments of resilience, each experience has shaped me into the educator I am today, driven by a passion for instilling knowledge and making a difference in the lives of my students. ",
    name: "Mark Jack",
    work: "Manager",
    image: img4,
  },
  {
    id: "105",
    data: "One of the most rewarding aspects of teaching is the opportunity to cultivate a sense of curiosity and a love for learning in my students. Whether through thought-provoking discussions, hands-on activities ",
    name: "Jack Doe",
    work: "Manager",
    image: img5,
  },
  {
    id: "106",
    data: "But teaching is not without its challenges. From navigating the diverse needs of a classroom to adapting to ever-evolving educational trends, being an effective educator requires resilience, flexibility ",
    name: "Sonali Nayak",
    work: "teacher",
    image: img6,
  },
  {
    id: "107",
    data: "Seeing my students' eyes light up with excitement as they explore new ideas and discover their own unique talents is a reminder of the profound impact that education can have on young lives ",
    name: "Dina Fok",
    work: "Teacher",
    image: img7,
  },
];
interface LearnerSpeaksProps {}

const LearnerSpeaks: React.FC<LearnerSpeaksProps> = () => {
  const navigationNextBtn = useRef<any>(null);
  const navigationPrevBtn = useRef<any>(null);
  const [, setInit] = useState(false);
  const [active, setActive] = useState<number>(0);
  const [objData, setObjData] = useState<any>("");
  useEffect(() => {
    setObjData(imgData[active]);
  }, [active]);
  return (
    <div id="swiper-main-container">
      <div className="background-blue-swiper">
        <Lottie animationData={blue} loop={true} />
        <div className="learner-heading">
          Learners speak: Life-changing courses!
        </div>
      </div>
      <div className="main-swiper">
        <div ref={navigationPrevBtn}>
          <Image src={next} alt="next" />
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          className="swiper-main-container"
          slidesPerView={3}
          speed={600}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          initialSlide={3}
          navigation={{
            prevEl: navigationPrevBtn.current,
            nextEl: navigationNextBtn.current,
          }}
          onInit={() => setInit(true)}
          centeredSlides={true}
          onSlideChange={(swiper: any) => setActive(swiper.activeIndex)}
          breakpoints={{
            577: {
              slidesPerView: 5,
            },
          }}
        >
          <div>
            {imgData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slider-img">
                  <Image
                    src={item.image}
                    alt="teachers"
                    className="slider-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-text-learn">
            <div className="content-text">{objData.data}</div>
            <div className="name-section">
              <span className="name">{objData.name} </span>{" "}
              <Divider
                orientation="vertical"
                variant="middle"
                style={{ borderWidth: "2px", borderRadius: "5px" }}
                flexItem
              />{" "}
              <span className="work">{objData.work}</span>
            </div>
          </div>
        </Swiper>
        <div ref={navigationNextBtn}>
          <Image src={prv} alt="prv" />
        </div>
      </div>
    </div>
  );
};

export default LearnerSpeaks;
